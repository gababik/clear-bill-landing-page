import { FAQ } from "@/components/faq"

export function FAQSection() {
  return (
    <section id="faq" className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Everything you need to know about ClearBill</p>
        </div>
        <FAQ />
      </div>
    </section>
  )
}
