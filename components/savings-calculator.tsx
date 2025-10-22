"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function SavingsCalculator() {
  const [billAmount, setBillAmount] = useState<string>("5000")
  const [savingsPercent, setSavingsPercent] = useState<number[]>([30])
  const [displaySavings, setDisplaySavings] = useState(0)
  const [displayFee, setDisplayFee] = useState(0)

  const billValue = Number.parseFloat(billAmount) || 0
  const estimatedSavings = billValue * (savingsPercent[0] / 100)
  const ourFee = estimatedSavings * 0.1

  useEffect(() => {
    const duration = 800
    const steps = 40
    const savingsIncrement = estimatedSavings / steps
    const feeIncrement = ourFee / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      if (current >= steps) {
        setDisplaySavings(estimatedSavings)
        setDisplayFee(ourFee)
        clearInterval(timer)
      } else {
        setDisplaySavings(savingsIncrement * current)
        setDisplayFee(feeIncrement * current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [estimatedSavings, ourFee])

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Savings Calculator</CardTitle>
        <CardDescription>Estimate your potential savings and our success fee</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bill-amount" className="text-base font-semibold">
            Total Bill Amount
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="bill-amount"
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              className="pl-7 text-lg"
              min="0"
              step="100"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="savings-estimate" className="text-base font-semibold">
            Initial Savings Estimate: {savingsPercent[0]}%
          </Label>
          <Slider
            id="savings-estimate"
            min={10}
            max={60}
            step={5}
            value={savingsPercent}
            onValueChange={setSavingsPercent}
            className="py-4"
          />
          <p className="text-xs text-muted-foreground">Adjust the slider to see different scenarios</p>
        </div>

        <div className="pt-4 border-t space-y-4">
          <div className="flex justify-between items-center p-4 bg-success/10 rounded-xl">
            <span className="text-sm font-semibold">Estimated Savings</span>
            <span className="text-3xl font-bold text-success">
              ${displaySavings.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between items-center p-4 bg-accent/10 rounded-xl">
            <span className="text-sm font-semibold">Our Fee (10% of savings)</span>
            <span className="text-2xl font-bold text-accent">
              ${displayFee.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Note: Actual savings vary; fee charged only on realized savings.
        </p>
      </CardContent>
    </Card>
  )
}
