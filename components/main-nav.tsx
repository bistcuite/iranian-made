"use client"

import Link from "next/link"
import { Cloud, Heart, Menu, X } from "lucide-react"
import { useState } from "react"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Cloud className="h-6 w-6" />
          <span className="text-xl font-bold">پلتفرم‌های ایرانی</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md p-2 text-muted-foreground hover:bg-muted"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">منو</span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            صفحه اصلی
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:underline">
            سوالات متداول
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            درباره ما
          </Link>
          <Link href="/submit" className="text-sm font-medium hover:underline">
            معرفی پلتفرم
          </Link>
          <Link href="/support" className="text-sm font-medium text-red-500 hover:underline flex items-center gap-1">
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            حمایت
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-3 p-4 border-t">
          <Link href="/" className="text-sm font-medium hover:bg-muted p-2 rounded-md">
            صفحه اصلی
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:bg-muted p-2 rounded-md">
            سوالات متداول
          </Link>
          <Link href="/about" className="text-sm font-medium hover:bg-muted p-2 rounded-md">
            درباره ما
          </Link>
          <Link href="/submit" className="text-sm font-medium hover:bg-muted p-2 rounded-md">
            معرفی پلتفرم
          </Link>
          <Link
            href="/support"
            className="text-sm font-medium text-red-500 hover:bg-red-50 p-2 rounded-md flex items-center gap-1"
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            حمایت
          </Link>
        </nav>
      </div>
    </header>
  )
}

