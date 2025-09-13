import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SkillSwap - Exchange Skills, Earn Points",
  description: "A platform for exchanging skills between users using a point-based system",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`font-sans ${inter.variable} ${cairo.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
