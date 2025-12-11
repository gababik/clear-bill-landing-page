//app/api/bills/route.ts
import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { User } from "@/lib/models/User"
import { Bill } from "@/lib/models/Bill"
import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = "nodejs" //important so mongoose and OpenAI work correctly. Ok good works

export async function POST(req: Request) {
    try {
        await connectToDatabase()

        const formData = await req.formData()
        const file = formData.get("file") as File | null

        const fullName = (formData.get("name") as string | null) || (formData.get("fullName") as string | null) || undefined
        const email = (formData.get("email") as string | null)?.toLowerCase()
        const phone = (formData.get("phone") as string | null) || undefined
        const providerName = (formData.get("providerName") as string | null) || undefined
        const billDate = (formData.get("billDate") as string | null) || undefined
        const totalAmount = (formData.get("totalAmount") as string | null) || undefined
        const notes = (formData.get("notes") as string | null) || undefined

        if (!file) {
            return NextResponse.json({ error: "Missing file" }, { status: 400 })
        }

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 })
        }

        //1. Find or create user by email - ok works
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ name: fullName, email })
        }

        //2. Create a Bill document in "pending" status - ok works
        const billDoc = await Bill.create({
            user: user._id,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            status: "pending",
        })

        //3. Convert uploaded file to base64 data URL
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const base64 = buffer.toString("base64")
        const dataUrl = `data:${file.type};base64,${base64}`

        //4. Build contextual text for the model
        const contextLines: string[] = []

        if (fullName) contextLines.push(`Patient name: ${fullName}`)
        if (providerName) contextLines.push(`Provider: ${providerName}`)
        if (billDate) contextLines.push(`Bill date: ${billDate}`)
        if (totalAmount) contextLines.push(`Total amount: ${totalAmount}`)
        if (phone) contextLines.push(`Phone: ${phone}`)
        if (notes) contextLines.push(`Additional context from user: ${notes}`)

        const contextText =
            contextLines.length > 0
                ? `Here is extra structured info the user provided about the bill:\n${contextLines.join("\n")}\n\n`
                : ""

        //5. Call OpenAI Chat
        // Docs: https://platform.openai.com/docs/guides/images-vision :contentReference[oaicite:0]{index=0}
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a certified medical coder and professional medical bill auditor. " +
                        "You help patients understand their bills, spot errors, and negotiate fair charges.",
                },
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text:
                                contextText +
                                [
                                    "The user has uploaded a medical bill (hospital or provider).",
                                    "",
                                    "Please do ALL of the following:",
                                    "1. Summarize what this bill appears to be for (in plain English).",
                                    "2. Flag any obvious red flags, coding issues, or charges that look unusually high.",
                                    "3. Estimate a rough savings range the user might be able to negotiate (e.g., 10–30%).",
                                    "4. Give 3–5 specific negotiation talking points the user can use with the hospital or provider.",
                                    "",
                                    "Write your answer in clear bullets and short paragraphs.",
                                ].join("\n"),
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: dataUrl,
                            },
                        },
                    ],
                },
            ],
        })

        //6. Extract text from the completion - ok works
        const choice = completion.choices[0]
        let summary = ""

        const content = choice?.message?.content

        if (typeof content === "string") {
            summary = content.trim()
        } else if (Array.isArray(content)) {
            //Not sure if needed but new SDKs will need it. Leave for now.
            summary = content
                .map((part: any) => (part.type === "text" ? part.text : ""))
                .join("\n")
                .trim()
        }

        if (!summary) {
            summary = "We couldn't extract a detailed analysis from the model for this bill."
        }

        //7. Update bill in DB
        billDoc.status = "analyzed"
        billDoc.analysisSummary = summary
        billDoc.rawModelOutput = JSON.stringify(completion)
        await billDoc.save()

        return NextResponse.json(
            {
                success: true,
                billId: billDoc._id.toString(),
                summary,
            },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error in /api/bills:", error)

        const message =
            error instanceof Error
                ? error.message
                : typeof error === "string"
                    ? error
                    : "Unknown server error"

        //Show the real message while in dev. Ok works
        return NextResponse.json({ error: message }, { status: 500 })
    }
}
