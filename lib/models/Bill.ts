//lib/models/Bill.ts
import mongoose, { Schema, Model, models } from "mongoose"

export interface IBill {
    _id: mongoose.Types.ObjectId
    user: mongoose.Types.ObjectId
    fileName: string
    fileType: string
    fileSize: number
    status: "pending" | "analyzed" | "error"
    analysisSummary?: string
    rawModelOutput?: string
}

const BillSchema = new Schema<IBill>(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        fileName: { type: String, required: true },
        fileType: { type: String, required: true },
        fileSize: { type: Number, required: true },
        status: {
            type: String,
            enum: ["pending", "analyzed", "error"],
            default: "pending",
        },
        analysisSummary: String,
        rawModelOutput: String,
    },
    { timestamps: true }
)

export const Bill: Model<IBill> =
    (models.Bill as Model<IBill>) || mongoose.model<IBill>("Bill", BillSchema)
