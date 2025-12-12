"use client"
import { StepCard } from "@/components/step-card"
import { Upload, Search, MessageSquare, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your bill",
      description: "Upload your bill (PDF/JPG/PNG) or photo; we auto-extract itemized charges.",
    },
    {
      icon: Search,
      title: "Audit every line",
      description: "Audit every line against coding rules & common error libraries; coders verify.",
    },
    {
      icon: MessageSquare,
      title: "Negotiate with providers",
      description: "Negotiate with providers to correct and reduce unfair charges.",
    },
    {
      icon: CheckCircle,
      title: "You approve savings",
      description: "You approve savings; we take our success fee only if we save you money.",
    },
  ]

  return (
    <section id="how-it-works" className="container py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our transparent process turns confusing bills into clear savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} icon={step.icon} step={index + 1} title={step.title} description={step.description} />
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">Not legal or insurance advice.</p>
      </div>
    </section>
  )
}
