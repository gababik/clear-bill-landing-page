"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function ResultsProof() {
  const [showModal, setShowModal] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  const cases = [
    {
      title: "Removed duplicate lab charges",
      savings: 380,
      category: "Duplicate Billing",
      detail: "CPT 71045 charged twice; removed second instance",
    },
    {
      title: "Out-of-network ER recoded",
      savings: 2140,
      category: "Coding Error",
      detail: "Emergency service recoded to in-network rate",
    },
    {
      title: "Bundled imaging adjustment",
      savings: 760,
      category: "Bundling Issue",
      detail: "Separate imaging charges bundled per CMS guidelines",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cases.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="container py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how we've helped patients reduce their medical bills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((case_, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-xl transition-all duration-500 group ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{case_.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {case_.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-success transition-transform group-hover:scale-110 duration-300">
                    ${case_.savings.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground ml-2">saved</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {case_.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="link" onClick={() => setShowModal(true)} className="group">
              See more examples
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>More Success Stories</DialogTitle>
            <DialogDescription>
              Additional examples of how ClearBill has helped patients save on medical bills
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <p className="font-medium">Anesthesia overcharge correction</p>
                <p className="text-sm text-muted-foreground">$1,240 saved</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <p className="font-medium">Pharmacy duplicate charge removed</p>
                <p className="text-sm text-muted-foreground">$580 saved</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-1" />
              <div>
                <p className="font-medium">Surgical supply unbundling</p>
                <p className="text-sm text-muted-foreground">$3,100 saved</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
