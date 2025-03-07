import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "پلتفرم‌های ایرانی | جایگزین‌های بومی",
  description: "معرفی و مقایسه بهترین پلتفرم‌های ایرانی جایگزین سرویس‌های خارجی",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'