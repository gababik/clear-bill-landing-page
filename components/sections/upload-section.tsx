"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Uploader } from "@/components/uploader"

export function UploadSection() {
  return (
    <section id="upload-section" className="container py-20 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Upload your medical bill and let our certified coders find your savings
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Upload Your Bill</CardTitle>
            <CardDescription>
              Drag and drop your bill or click to browse. We accept PDF, JPG, and PNG files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Uploader />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
