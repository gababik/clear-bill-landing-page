"use client"

import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface SavingsMeterProps {
  currentSavings: number
  estimatedTotal: number
  className?: string
}

export function SavingsMeter({ currentSavings, estimatedTotal, className }: SavingsMeterProps) {
  const [displaySavings, setDisplaySavings] = useState(0)
  const percentage = Math.min((currentSavings / estimatedTotal) * 100, 100)

  // Animate the counter
  useEffect(() => {
    const duration = 1000
    const steps = 60
    const increment = currentSavings / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= currentSavings) {
        setDisplaySavings(currentSavings)
        clearInterval(timer)
      } else {
        setDisplaySavings(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [currentSavings])

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-success" />
          <span className="text-sm font-semibold text-foreground">Savings Meter</span>
        </div>
        <span className="text-2xl font-bold text-success">${displaySavings.toLocaleString()}</span>
      </div>

      <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Estimated total savings: ${estimatedTotal.toLocaleString()}
      </p>
    </div>
  )
}
