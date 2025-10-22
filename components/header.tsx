"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileUp } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-primary">ClearBill</span>
          <span className="text-[10px] text-muted-foreground tracking-wide">Make medical bills fair.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Security
          </Link>
        </nav>

        <Link href="/upload">
          <Button className="gradient-primary hover:gradient-primary-hover text-white font-semibold shadow-lg">
            <FileUp className="mr-2 h-4 w-4" />
            Upload Your Bill
          </Button>
        </Link>
      </div>
    </header>
  )
}
