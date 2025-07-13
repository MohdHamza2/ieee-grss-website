import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IEEE GRSS MJCET Chapter - Geoscience & Remote Sensing Society",
  description:
    "IEEE GRSS MJCET Chapter - Advancing geoscience and remote sensing education at Muffakham Jah College of Engineering & Technology, Hyderabad",
  keywords: "IEEE, GRSS, MJCET, Geoscience, Remote Sensing, Hyderabad, Engineering, Technology, Education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}
