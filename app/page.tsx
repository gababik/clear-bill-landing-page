import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SavingsCalculatorSection } from "@/components/sections/savings-calculator-section"
import { ResultsProof } from "@/components/sections/results-proof"
import { SecurityCompliance } from "@/components/sections/security-compliance"
import { Pricing } from "@/components/sections/pricing"
import { FAQSection } from "@/components/sections/faq"
import { UploadSection } from "@/components/sections/upload-section"
import { TeamSection } from "@/components/sections/team"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <SavingsCalculatorSection />
      <ResultsProof />
      <SecurityCompliance />
      <Pricing />
      <FAQSection />
      <UploadSection />
      <TeamSection />
    </div>
  )
}
