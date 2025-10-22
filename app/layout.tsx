import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClearBill - Make Your Medical Bills Fair",
  description:
    "Upload a bill. We audit every line with CPC/CPB-certified coders, fix errors, and negotiate with providers. If we don't save you money, you don't pay.",
  openGraph: {
    title: "ClearBill - Make Your Medical Bills Fair",
    description: "No savings, no fee. Medical billing review and negotiation by certified coders.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
