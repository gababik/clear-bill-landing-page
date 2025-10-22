import { SavingsCalculator } from "@/components/savings-calculator"

export function SavingsCalculatorSection() {
  return (
    <section className="container py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Savings</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">See how much you could save with ClearBill</p>
        </div>
        <SavingsCalculator />
      </div>
    </section>
  )
}
