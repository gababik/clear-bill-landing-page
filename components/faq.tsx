import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What files can I upload?",
      answer:
        "You can upload PDF, JPG, or PNG files. Phone photos work great too! Our system automatically extracts the itemized charges from your bill.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most audits are completed within 5-7 business days. Complex cases may take up to 2 weeks. We'll keep you updated throughout the process via email.",
    },
    {
      question: "What if you don't save me money?",
      answer:
        "You pay $0. Our fee is 100% success-based. If we don't find savings on your bill, there is no charge to you whatsoever.",
    },
    {
      question: "Are you lawyers or a collection agency?",
      answer:
        "No. We are medical billing coding and negotiation specialists with CPC/CPB-certified coders. We work to reduce your bills before they go to collections.",
    },
    {
      question: "Will this affect my credit?",
      answer:
        "No. We work directly with healthcare providers to correct billing errors and negotiate reductions before any collections activity. We'll explain all your options clearly.",
    },
    {
      question: 'What counts as "savings"?',
      answer:
        "Savings include any reduction in your bill amount through error correction, coding adjustments, or successful negotiation with the provider. Our 10% fee applies only to the actual dollar amount reduced from your original bill.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
