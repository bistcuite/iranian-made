"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, AlertTriangle, Upload } from "lucide-react"
import { useState } from "react"
import { MainNav } from "@/components/main-nav"

// Platform categories
const categories = [
  "پیام‌رسان",
  "فروشگاه",
  "ویدیو",
  "موسیقی",
  "جستجو",
  "نقشه",
  "ذخیره‌سازی",
  "ایمیل",
  "شبکه اجتماعی",
  "خدمات مالی",
  "آموزش",
  "سرگرمی",
  "سایر",
]

// Sample platforms for the issue reporting form
const platforms = ["بله", "دیجی‌کالا", "آپارات", "مهربان", "پارسی‌جو", "نشان", "ابرآروان", "چاپار"]

// Issue types
const issueTypes = ["اطلاعات نادرست", "لینک خراب", "توضیحات ناکافی", "دسته‌بندی نادرست", "پلتفرم غیرفعال شده", "سایر"]

export default function SubmitPage() {
  // State for new platform form
  const [platformName, setPlatformName] = useState("")
  const [website, setWebsite] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [alternatives, setAlternatives] = useState("")
  const [submitterName, setSubmitterName] = useState("")
  const [submitterEmail, setSubmitterEmail] = useState("")

  // State for issue reporting form
  const [selectedPlatform, setSelectedPlatform] = useState("")
  const [issueType, setIssueType] = useState("")
  const [issueDescription, setIssueDescription] = useState("")
  const [correction, setCorrection] = useState("")
  const [reporterName, setReporterName] = useState("")
  const [reporterEmail, setReporterEmail] = useState("")

  // Handle new platform submission
  const handlePlatformSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission to your backend
    alert("پلتفرم جدید با موفقیت ثبت شد. پس از بررسی، به لیست پلتفرم‌ها اضافه خواهد شد.")

    // Reset form
    setPlatformName("")
    setWebsite("")
    setCategory("")
    setDescription("")
    setAlternatives("")
    setSubmitterName("")
    setSubmitterEmail("")
  }

  // Handle issue report submission
  const handleIssueSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission to your backend
    alert("گزارش شما با موفقیت ثبت شد. با تشکر از همکاری شما.")

    // Reset form
    setSelectedPlatform("")
    setIssueType("")
    setIssueDescription("")
    setCorrection("")
    setReporterName("")
    setReporterEmail("")
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <MainNav />

      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">معرفی و گزارش پلتفرم</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            پلتفرم جدیدی را معرفی کنید یا مشکلی در اطلاعات پلتفرم‌های موجود را گزارش دهید
          </p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="submit" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="submit" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                معرفی پلتفرم جدید
              </TabsTrigger>
              <TabsTrigger value="report" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                گزارش مشکل
              </TabsTrigger>
            </TabsList>

            <TabsContent value="submit">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">معرفی پلتفرم ایرانی جدید</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePlatformSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="platform-name">
                            نام پلتفرم <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="platform-name"
                            placeholder="مثال: دیجی‌کالا"
                            value={platformName}
                            onChange={(e) => setPlatformName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">
                            وب‌سایت <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="website"
                            placeholder="مثال: digikala.com"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">
                          دسته‌بندی <span className="text-red-500">*</span>
                        </Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="دسته‌بندی را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">
                          توضیحات <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="توضیحات کاملی درباره پلتفرم، امکانات و ویژگی‌های آن بنویسید"
                          rows={5}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="alternatives">
                          جایگزین چه پلتفرم‌های خارجی است؟ <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="alternatives"
                          placeholder="مثال: اینستاگرام، فیسبوک، توییتر"
                          value={alternatives}
                          onChange={(e) => setAlternatives(e.target.value)}
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          نام پلتفرم‌های خارجی را با کاما (،) از هم جدا کنید
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="logo">لوگو یا آیکون (اختیاری)</Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="logo-upload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                              <p className="mb-2 text-sm text-muted-foreground">
                                <span className="font-semibold">برای آپلود کلیک کنید</span> یا فایل را اینجا رها کنید
                              </p>
                              <p className="text-xs text-muted-foreground">SVG, PNG یا JPG (حداکثر 2MB)</p>
                            </div>
                            <input id="logo-upload" type="file" className="hidden" accept="image/*" />
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                        <div className="space-y-2">
                          <Label htmlFor="submitter-name">نام شما (اختیاری)</Label>
                          <Input
                            id="submitter-name"
                            placeholder="نام خود را وارد کنید"
                            value={submitterName}
                            onChange={(e) => setSubmitterName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="submitter-email">ایمیل شما (اختیاری)</Label>
                          <Input
                            id="submitter-email"
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            value={submitterEmail}
                            onChange={(e) => setSubmitterEmail(e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">برای اطلاع‌رسانی درباره وضعیت بررسی پلتفرم</p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      ثبت پلتفرم جدید
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="report">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">گزارش مشکل در اطلاعات پلتفرم</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleIssueSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="platform-select">
                          انتخاب پلتفرم <span className="text-red-500">*</span>
                        </Label>
                        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                          <SelectTrigger id="platform-select">
                            <SelectValue placeholder="پلتفرم مورد نظر را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            {platforms.map((platform) => (
                              <SelectItem key={platform} value={platform}>
                                {platform}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issue-type">
                          نوع مشکل <span className="text-red-500">*</span>
                        </Label>
                        <Select value={issueType} onValueChange={setIssueType}>
                          <SelectTrigger id="issue-type">
                            <SelectValue placeholder="نوع مشکل را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            {issueTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="issue-description">
                          توضیحات مشکل <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="issue-description"
                          placeholder="توضیح دهید چه مشکلی در اطلاعات این پلتفرم وجود دارد"
                          rows={4}
                          value={issueDescription}
                          onChange={(e) => setIssueDescription(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="correction">
                          پیشنهاد اصلاح <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="correction"
                          placeholder="اطلاعات صحیح را وارد کنید"
                          rows={4}
                          value={correction}
                          onChange={(e) => setCorrection(e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                        <div className="space-y-2">
                          <Label htmlFor="reporter-name">نام شما (اختیاری)</Label>
                          <Input
                            id="reporter-name"
                            placeholder="نام خود را وارد کنید"
                            value={reporterName}
                            onChange={(e) => setReporterName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reporter-email">ایمیل شما (اختیاری)</Label>
                          <Input
                            id="reporter-email"
                            type="email"
                            placeholder="ایمیل خود را وارد کنید"
                            value={reporterEmail}
                            onChange={(e) => setReporterEmail(e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">برای اطلاع‌رسانی درباره وضعیت بررسی گزارش</p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      ثبت گزارش
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

