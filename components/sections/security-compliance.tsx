import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Building } from "lucide-react"
import Link from "next/link"

export function SecurityCompliance() {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest",
    },
    {
      icon: Shield,
      title: "Least-Privilege Access",
      description: "Strict access controls and audit logs",
    },
    {
      icon: FileCheck,
      title: "HIPAA Best Practices",
      description: "PHI handled per HIPAA guidelines",
    },
    {
      icon: Building,
      title: "Enterprise BAA Available",
      description: "Business Associate Agreements for organizations",
    },
  ]

  return (
    <section id="security" className="container py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your data is protected with enterprise-grade security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/privacy" className="text-sm text-accent hover:underline">
            Read our Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  )
}
