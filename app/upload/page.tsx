"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Uploader } from "@/components/uploader"
import { ProgressDock } from "@/components/progress-dock"
import { MilestoneBadge } from "@/components/milestone-badge"
import { Upload } from "lucide-react"

export default function UploadPage() {
  const [currentStep] = useState(1)

  return (
    <>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <MilestoneBadge label="Bill Upload" status="current" icon={<Upload className="h-4 w-4" />} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upload Your Medical Bill</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let our CPC/CPB-certified coders find savings in your medical bill
            </p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Bill Information</CardTitle>
              <CardDescription>Upload your bill and provide some basic information to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Uploader />
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-secondary/30 rounded-2xl">
            <h3 className="font-semibold mb-3 text-lg">What happens next?</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-foreground text-base">1.</span>
                <span>We extract and verify all itemized charges from your bill</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-foreground text-base">2.</span>
                <span>Our certified coders audit every line for errors and overcharges</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-foreground text-base">3.</span>
                <span>We negotiate directly with your provider to reduce unfair charges</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-foreground text-base">4.</span>
                <span>You review and approve the savings before we finalize</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <ProgressDock currentStep={currentStep} />
    </>
  )
}
