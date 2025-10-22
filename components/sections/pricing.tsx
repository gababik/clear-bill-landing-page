import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, HelpCircle } from "lucide-react"
import Link from "next/link"

export function Pricing() {
  return (
    <section id="pricing" className="container py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Fair Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">You only pay when we save you money</p>
        </div>

        <Card className="border-2">
          <CardContent className="pt-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full">
                <DollarSign className="h-12 w-12 text-accent" />
              </div>

              <div>
                <h3 className="text-4xl font-bold mb-2">No savings, no fee</h3>
                <p className="text-xl text-muted-foreground">10% of savings only (success-based)</p>
              </div>

              <div className="pt-6 border-t max-w-2xl mx-auto">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No upfront payment required. We only charge our 10% success fee when we successfully reduce your bill.
                  If we don't save you money, you pay nothing.
                </p>
                <Link href="#faq" className="inline-flex items-center text-sm text-accent hover:underline">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  What counts as 'savings'?
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
