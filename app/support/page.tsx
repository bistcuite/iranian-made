"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, Star, Share2, Gift, Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { MainNav } from "@/components/main-nav"

export default function SupportPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    alert(`پیام شما با موفقیت ارسال شد. با تشکر از حمایت شما!`)
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <MainNav />

      <section className="py-12 md:py-24 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block mb-4">
              <Heart className="h-20 w-20 text-red-500 fill-red-500 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">حمایت از پروژه</h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              با حمایت از این پروژه، به ما کمک کنید تا بتوانیم پلتفرم‌های ایرانی بیشتری را معرفی کنیم و به توسعه اکوسیستم
              دیجیتال کشور کمک کنیم.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">چرا از این پروژه حمایت کنیم؟</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background border-2 border-red-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Star className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle>توسعه محتوا</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    حمایت شما به ما کمک می‌کند تا پلتفرم‌های ایرانی بیشتری را شناسایی و معرفی کنیم و اطلاعات دقیق‌تری
                    درباره آن‌ها ارائه دهیم.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-2 border-red-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle>حمایت از توسعه‌دهندگان</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    با معرفی پلتفرم‌های ایرانی، به توسعه‌دهندگان و کارآفرینان ایرانی کمک می‌کنیم تا کاربران بیشتری جذب
                    کنند.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-2 border-red-100">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Share2 className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle>گسترش فرهنگ دیجیتال</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    با آشنایی بیشتر کاربران با پلتفرم‌های ایرانی، به گسترش فرهنگ استفاده از خدمات دیجیتال بومی کمک
                    می‌کنیم.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">روش‌های حمایت</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Heart className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle>حمایت مالی</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    با حمایت مالی، به ما کمک کنید تا هزینه‌های نگهداری سایت، جمع‌آوری اطلاعات و توسعه امکانات جدید را
                    تأمین کنیم.
                  </p>

                  <div className="grid gap-4">
                    <Link href="https://daramet.com/hasan" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-red-500 hover:bg-red-600">
                        <Heart className="mr-2 h-4 w-4 fill-white" />
                        حمایت مالی از پروژه
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Gift className="h-6 w-6 text-red-500" />
                    </div>
                    <CardTitle>روش‌های دیگر حمایت</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">معرفی پلتفرم جدید</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        اگر با پلتفرم ایرانی آشنا هستید که در سایت ما معرفی نشده، آن را به ما معرفی کنید.
                      </p>
                      <Button variant="outline" className="w-full">
                        معرفی پلتفرم
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">اشتراک‌گذاری</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        با اشتراک‌گذاری این سایت در شبکه‌های اجتماعی، به شناخته شدن پلتفرم‌های ایرانی کمک کنید.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Twitter className="mr-2 h-4 w-4" />
                          توییتر
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Instagram className="mr-2 h-4 w-4" />
                          اینستاگرام
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">مشارکت در کد</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        اگر برنامه‌نویس هستید، می‌توانید در توسعه این پروژه متن‌باز مشارکت کنید.
                      </p>
                      <Link href="https://github.com/bistcuite/iranian-made" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        مشاهده مخزن گیت‌هاب
                      </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">ارتباط با ما</h2>

            <Card className="bg-background">
              <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        نام
                      </label>
                      <Input
                        id="name"
                        placeholder="نام خود را وارد کنید"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        ایمیل
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      موضوع
                    </label>
                    <Input
                      id="subject"
                      placeholder="موضوع پیام"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      پیام
                    </label>
                    <Textarea
                      id="message"
                      placeholder="پیام خود را بنویسید"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">حامیان ما</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">۲۵+</div>
                <div className="text-sm text-muted-foreground">پلتفرم ایرانی</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">۱۰۰۰+</div>
                <div className="text-sm text-muted-foreground">بازدید روزانه</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">۵۰+</div>
                <div className="text-sm text-muted-foreground">مشارکت‌کننده</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-red-500">۱۵+</div>
                <div className="text-sm text-muted-foreground">دسته‌بندی</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap justify-center gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-lg font-bold text-gray-400"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground">و ده‌ها حامی دیگر که ما را در این مسیر همراهی می‌کنند.</p>

              <div>
                <Link href="https://daramet.com/hasan" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-500 hover:bg-red-600">
                    <Heart className="mr-2 h-4 w-4 fill-white" />
                    به حامیان بپیوندید
                  </Button>
                </Link>
              </div>
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

