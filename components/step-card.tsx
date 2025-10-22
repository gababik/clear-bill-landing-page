"use client"

import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

interface StepCardProps {
  icon: LucideIcon
  step: number
  title: string
  description: string
}

export function StepCard({ icon: Icon, step, title, description }: StepCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={cardRef}
      className={`relative border-2 hover:border-accent/50 hover:shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${step * 100}ms` }}
    >
      <CardContent className="pt-6">
        <div className="absolute -top-4 left-6 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
          {step}
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="p-3 bg-accent/10 rounded-lg transition-transform hover:scale-110 duration-300">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
