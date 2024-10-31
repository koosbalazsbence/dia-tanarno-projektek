import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// components
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Hollóvár - A királyi vár titkai",
  description:
    "Élmény, Kaland, Felfedezés. Fedezze fel a Hollóvárat és foglaljon időpontot még ma!",
  icons: {
    icon: "/favicon.ico",
  },
  creator: "@hollovar, @koosbalazsbence",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
