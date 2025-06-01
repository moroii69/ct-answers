import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TermsDialog from "@/components/terms-dialog"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeTantra Answers",
  description: "Find programming solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <DisclaimerBanner />
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
          <TermsDialog />
        </ThemeProvider>
      </body>
    </html>
  )
}
