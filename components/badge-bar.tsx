import { Shield, Lock, DollarSign } from "lucide-react"

export function BadgeBar() {
  const badges = [
    {
      icon: Shield,
      text: "CPC/CPB-Certified Coders",
    },
    {
      icon: Lock,
      text: "Encryption in transit & at rest",
    },
    {
      icon: DollarSign,
      text: "No savings, no fee",
    },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <badge.icon className="h-5 w-5 text-accent" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  )
}
