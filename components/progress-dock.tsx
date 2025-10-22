"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressDockProps {
  currentStep: number
  totalSteps?: number
}

const steps = [
  { id: 1, label: "Upload" },
  { id: 2, label: "Audit" },
  { id: 3, label: "Negotiate" },
  { id: 4, label: "Approve" },
]

export function ProgressDock({ currentStep, totalSteps = 4 }: ProgressDockProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-foreground">
            Step {currentStep} of {totalSteps}
          </div>
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  {currentStep > step.id ? (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  ) : currentStep === step.id ? (
                    <Circle className="h-5 w-5 text-accent fill-accent" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span
                    className={cn(
                      "text-xs font-medium",
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn("w-8 h-0.5 mx-2 mb-4", currentStep > step.id ? "bg-success" : "bg-border")} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
