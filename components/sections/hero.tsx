"use client"

import { Button } from "@/components/ui/button"
import { BadgeBar } from "@/components/badge-bar"
import { FileUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById("how-it-works")
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-teal-500/20 to-indigo-500/20 animate-gradient-shift" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container py-20 md:py-32">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Make your medical bills fair.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-3xl">
            Upload a bill. CPC/CPB-certified coders audit every line, fix errors, and negotiate savings. If we don't
            save you money, you don't pay.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/upload">
              <Button
                size="lg"
                className="gradient-primary hover:gradient-primary-hover text-white text-lg px-8 font-semibold shadow-xl"
              >
                <FileUp className="mr-2 h-5 w-5" />
                Upload Your Bill
              </Button>
            </Link>
            <Button size="lg" variant="outline" onClick={scrollToHowItWorks} className="text-lg px-8 bg-transparent">
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 w-full">
            <BadgeBar />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, 10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
