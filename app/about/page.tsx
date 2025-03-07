"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram,Github, Mail, Twitter, Globe, Heart } from "lucide-react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"

export default function AboutPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <MainNav />

      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">درباره من</h1>
          <p className="mt-6 text-lg text-muted-foreground">آشنایی با سازنده پروژه پلتفرم‌های ایرانی</p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3 items-start">
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="تصویر سازنده"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">گیت‌هاب</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">توییتر</span>
                  </Button>
                </Link>
                <Link href="mailto:info@iranianplatforms.ir">
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">ایمیل</span>
                  </Button>
                </Link>
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">وب‌سایت</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">سلام، من حسن هستم!</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      من یک توسعه‌دهنده وب و علاقه‌مند به فناوری هستم که این پروژه را به صورت انفرادی راه‌اندازی کرده‌ام.
                      هدف من از ایجاد این وب‌سایت، معرفی پلتفرم‌های ایرانی با کیفیت به کاربران و کمک به رشد اکوسیستم
                      دیجیتال کشور است.
                    </p>
                    <p>
                      با بیش از ۵ سال تجربه در زمینه توسعه وب، همیشه به دنبال راه‌هایی برای استفاده از تخصصم در جهت کمک
                      به جامعه بوده‌ام. این پروژه نتیجه علاقه من به فناوری و تمایل به حمایت از توسعه‌دهندگان و کارآفرینان
                      ایرانی است.
                    </p>
                    <p>
                      من معتقدم که با معرفی و حمایت از پلتفرم‌های ایرانی، می‌توانیم به ایجاد یک اکوسیستم دیجیتال قوی‌تر کمک
                      کنیم و فرصت‌های بیشتری برای نوآوری و رشد در کشور فراهم کنیم.
                    </p>
                    <p>
                      این پروژه به صورت متن‌باز توسعه داده می‌شود و من از مشارکت همه علاقه‌مندان استقبال می‌کنم. اگر ایده،
                      پیشنهاد یا انتقادی دارید، خوشحال می‌شوم از طریق راه‌های ارتباطی زیر با من در تماس باشید.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold">تماس با من</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span>ایمیل: info@iranianplatforms.ir</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <span>گیت‌هاب: github.com/username</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Twitter className="h-5 w-5 text-muted-foreground" />
                        <span>توییتر: twitter.com/username</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <span>وب‌سایت: example.com</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link href="/support">
                      <Button className="w-full bg-red-500 hover:bg-red-600">
                        <Heart className="mr-2 h-4 w-4 fill-white" />
                        حمایت از پروژه
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background">
        <div className="container py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} تمامی حقوق برای پلتفرم‌های ایرانی محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

