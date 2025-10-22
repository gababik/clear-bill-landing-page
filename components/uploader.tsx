"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Camera, FileText, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ConfettiBurst } from "@/components/confetti-burst"

export function Uploader() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    providerName: "",
    billDate: "",
    totalAmount: "",
    authorizationConsent: false,
    electronicConsent: false,
  })

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile)
      setErrors((prev) => ({ ...prev, file: "" }))
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile)
      setErrors((prev) => ({ ...prev, file: "" }))
    }
  }

  const validateFile = (file: File): boolean => {
    const validTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"]
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, file: "Please upload a PDF, JPG, or PNG file" }))
      return false
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({
        ...prev,
        file: "File size must be less than 10MB. Try compressing your image or taking a clearer photo.",
      }))
      return false
    }

    return true
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!file) {
      newErrors.file = "Please upload your medical bill"
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.billDate) {
      newErrors.billDate = "Bill date is required"
    }

    if (!formData.totalAmount.trim()) {
      newErrors.totalAmount = "Total amount is required"
    } else if (isNaN(Number.parseFloat(formData.totalAmount)) || Number.parseFloat(formData.totalAmount) <= 0) {
      newErrors.totalAmount = "Please enter a valid amount"
    }

    if (!formData.authorizationConsent) {
      newErrors.authorizationConsent = "You must authorize ClearBill to review your bill"
    }

    if (!formData.electronicConsent) {
      newErrors.electronicConsent = "You must consent to electronic communications"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsUploading(true)

    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setShowConfetti(true)

    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload Area */}
        <div className="space-y-2">
          <Label>Medical Bill</Label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
              isDragging ? "border-accent bg-accent/5" : "border-border",
              errors.file && "border-destructive",
            )}
          >
            {file ? (
              <div className="flex items-center justify-center gap-3">
                <FileText className="h-8 w-8 text-accent" />
                <div className="text-left">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Button type="button" variant="ghost" size="sm" onClick={() => setFile(null)}>
                  Remove
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <Camera className="h-12 w-12 text-muted-foreground md:hidden" />
                </div>
                <div>
                  <p className="font-medium mb-1">Drag and drop your bill here, or click to browse</p>
                  <p className="text-sm text-muted-foreground">PDF, JPG, or PNG • Max 10MB • Phone photos work great</p>
                </div>
                <Input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <Button type="button" variant="outline" asChild>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Choose File
                  </label>
                </Button>
              </div>
            )}
          </div>
          {errors.file && <p className="text-sm text-destructive">{errors.file}</p>}
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="providerName">Provider Name (optional)</Label>
            <Input
              id="providerName"
              value={formData.providerName}
              onChange={(e) => updateFormData("providerName", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="billDate">Bill Date *</Label>
            <Input
              id="billDate"
              type="date"
              value={formData.billDate}
              onChange={(e) => updateFormData("billDate", e.target.value)}
              className={errors.billDate ? "border-destructive" : ""}
            />
            {errors.billDate && <p className="text-sm text-destructive">{errors.billDate}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalAmount">Total Amount *</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="totalAmount"
                type="number"
                step="0.01"
                value={formData.totalAmount}
                onChange={(e) => updateFormData("totalAmount", e.target.value)}
                className={cn("pl-7", errors.totalAmount && "border-destructive")}
              />
            </div>
            {errors.totalAmount && <p className="text-sm text-destructive">{errors.totalAmount}</p>}
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-start gap-3">
            <Checkbox
              id="authorization"
              checked={formData.authorizationConsent}
              onCheckedChange={(checked) => updateFormData("authorizationConsent", checked as boolean)}
              className={errors.authorizationConsent ? "border-destructive" : ""}
            />
            <div className="space-y-1">
              <Label htmlFor="authorization" className="text-sm font-normal leading-relaxed cursor-pointer">
                I authorize ClearBill to review my bill and communicate with the provider on my behalf. *
              </Label>
              {errors.authorizationConsent && <p className="text-sm text-destructive">{errors.authorizationConsent}</p>}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="electronic"
              checked={formData.electronicConsent}
              onCheckedChange={(checked) => updateFormData("electronicConsent", checked as boolean)}
              className={errors.electronicConsent ? "border-destructive" : ""}
            />
            <div className="space-y-1">
              <Label htmlFor="electronic" className="text-sm font-normal leading-relaxed cursor-pointer">
                I consent to electronic communications regarding my bill review. *
              </Label>
              {errors.electronicConsent && <p className="text-sm text-destructive">{errors.electronicConsent}</p>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full gradient-primary hover:gradient-primary-hover text-white font-semibold shadow-xl"
          size="lg"
          disabled={isUploading}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              We're extracting your itemized charges...
            </>
          ) : (
            "Submit Bill Securely"
          )}
        </Button>
      </form>

      <ConfettiBurst trigger={showConfetti} />
    </>
  )
}
