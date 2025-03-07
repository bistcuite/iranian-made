"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ShoppingCart, Video, Music, Search, Map, Cloud, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MainNav } from "@/components/main-nav"

// Define platform data structure
const platforms = [
  {
    id: 1,
    name: "بله",
    icon: "/brands/bale.png",
    // icon: MessageSquare,
    category: "پیام‌رسان",
    website: "bale.ai",
    alternatives: ["واتس‌اپ", "تلگرام"],
    description:
      "پیام‌رسان ایرانی با قابلیت‌های پرداخت و خدمات مالی که امکان چت، تماس صوتی و تصویری، کانال و گروه را فراهم می‌کند.",
  },
  {
    id: 2,
    name: "دیجی‌کالا",
    icon: "/brands/digikala.png",
    // icon: ShoppingCart,
    category: "فروشگاه",
    website: "digikala.com",
    alternatives: ["آمازون", "eBay"],
    description:
      "بزرگترین فروشگاه آنلاین ایران با میلیون‌ها کالا، تحویل سریع و امکان مقایسه قیمت و مشخصات محصولات مختلف.",
  },
  {
    id: 3,
    name: "آپارات",
    icon: "/brands/aparat.png",
    // icon: Video,
    category: "ویدیو",
    website: "aparat.com",
    alternatives: ["یوتیوب", "Vimeo"],
    description:
      "بزرگترین پلتفرم اشتراک ویدیو در ایران که امکان آپلود، تماشا و اشتراک‌گذاری ویدیو را برای کاربران فراهم می‌کند.",
  },
  {
    id: 4,
    name: "ملودیفای",
    icon: "/brands/melodifi.png",
    // icon: Music,
    category: "موسیقی",
    website: "melodify.app",
    alternatives: ["اسپاتیفای", "اپل موزیک"],
    description:
      "ملودیفای پلتفرم مرجع پخش و دانلود آهنگ‌های ایرانی و خارجی است",
  },
  {
    id: 5,
    name: "گردو",
    icon: "/brands/gerdoo.png",
    // icon: Search,
    category: "جستجو",
    website: "gerdoo.me",
    alternatives: ["گوگل", "بینگ"],
    description: "گردو یک فراجستجوگر است که مطابق نیاز کاربران فارسی‌زبان محتوای خود را ارائه می‌دهد که به مرور در حال تبدیل‌شدن به یک موتور جستجوی مستقل است",
  },
  {
    id: 6,
    name: "نشان",
    icon: "/brands/neshan.png",
    // icon: Map,
    category: "نقشه",
    website: "neshan.org",
    alternatives: ["گوگل مپس", "Waze"],
    description: "سرویس نقشه و مسیریابی ایرانی با اطلاعات دقیق محلی، ترافیک لحظه‌ای و پشتیبانی از آدرس‌های ایرانی.",
  },
  {
    id: 7,
    name: "بلد",
    icon: "/brands/balad.png",
    // icon: Map,
    category: "نقشه",
    website: "balad.ir",
    alternatives: ["گوگل مپس", "Waze"],
    description: "سرویس نقشه و مسیریابی ایرانی با اطلاعات دقیق محلی، ترافیک لحظه‌ای و پشتیبانی از آدرس‌های ایرانی.",
  },
  {
    id: 8,
    name: "ابرآروان",
    icon: "/brands/arvan.png",
    // icon: Cloud,
    category: "ذخیره‌سازی",
    website: "arvancloud.com",
    alternatives: ["AWS", "Cloudflare"],
    description: "سرویس ابری و CDN ایرانی با زیرساخت قدرتمند داخلی برای میزبانی وب، ذخیره‌سازی و توزیع محتوا.",
  },
  {
    id: 9,
    name: "ایتا",
    icon: "/brands/eitaa.svg",
    category: "پیام‌رسان",
    website: "eitaa.com",
    alternatives: ["تلگرام"],
    description: "ایتا یک پیام‌رسان ایرانی با قابلیت چت، تماس صوتی، کانال، گروه و امکانات متنوع دیگر برای کاربران ایرانی."
  },  

  {
    id: 10,
    name: "مکتب‌خونه",
    icon: "/brands/maktabkhooneh.svg",
    // icon: Mail,
    category: "آموزش",
    website: "maktabkhooneh.org",
    alternatives: ["یوتیوب", "یودمی"],
    description: "سایت مکتب‌خونه یک پلتفرم آموزشی آنلاین است که دوره‌های متنوعی در زمینه‌های مختلف علمی، مهارتی و تخصصی به زبان فارسی ارائه می‌دهد.",
  },
  {
    id: 11,
    name: "فرادرس",
    icon: "/brands/faradars.svg",
    // icon: Mail,
    category: "آموزش",
    website: "faradars.org",
    alternatives: ["یوتیوب", "یودمی"],
    description: "سایت فرادرس یک پلتفرم آموزشی آنلاین است که دوره‌های متنوعی در زمینه‌های مختلف علمی، مهارتی و تخصصی به زبان فارسی ارائه می‌دهد.",
  },
  {
    id: 12,
    name: "کافه‌بازار",
    icon: "/brands/bazaar.png",
    category: "اندروید",
    website: "cafebazaar.ir",
    alternatives: ["Google Play", "App Store"],
    description: "بازار یک مارکت اندرویدی ایرانی است که امکان دانلود و خرید اپلیکیشن‌های مختلف را برای کاربران فراهم می‌کند."
  },
  {
    id: 13,
    name: "فیلیمو",
    icon: "/brands/filimo.svg",
    category: "ویدیو",
    website: "filimo.com",
    alternatives: ["Netflix", "Disney+"] ,
    description: "پلتفرم پخش آنلاین فیلم و سریال ایرانی و خارجی با آرشیوی گسترده و اشتراک ویژه."
  },
  {
    id: 14,
    name: "نماوا",
    icon: "/brands/namava.svg",
    category: "ویدیو",
    website: "namava.ir",
    alternatives: ["Netflix", "Disney+"],
    description: "خدمات پخش آنلاین فیلم و سریال با دسترسی به محتوای داخلی و خارجی."
  },
  {
    id: 15,
    name: "آیگپ",
    icon: "/brands/igap.svg",
    category: "پیام‌رسان",
    website: "igap.net",
    alternatives: ["تلگرام", "واتس‌اپ"],
    description: "آیگپ یک پیام‌رسان ایرانی با امکاناتی مانند چت، تماس صوتی و تصویری، کانال، گروه و خدمات مالی دیجیتال."
  },
  {
    id: 16,
    name: "ویراستی",
    icon: "/brands/virasty.png",
    category: "شبکه اجتماعی",
    website: "virasty.com",
    alternatives: ["توییتر", "Threads"],
    description: "ویراستی یک شبکه اجتماعی ایرانی مبتنی بر متن است که امکان انتشار نوشته‌ها، تعامل با کاربران و دنبال‌کردن موضوعات مورد علاقه را فراهم می‌کند."
  },
  {
    id: 17,
    name: "سروش‌پلاس",
    icon: "/brands/soroush.svg",
    category: "پیام‌رسان",
    website: "sapp.ir",
    alternatives: ["تلگرام", "واتس‌اپ"],
    description: "سروش‌پلاس یک پیام‌رسان ایرانی با قابلیت چت، تماس صوتی و تصویری، کانال، گروه و خدمات پرداخت درون‌برنامه‌ای است."
  },
  {
    id: 18,
    name: "گپ",
    icon: "/brands/gap.png",
    category: "پیام‌رسان",
    website: "gap.im",
    alternatives: ["تلگرام", "واتس‌اپ"],
    description: "گپ یک پیام‌رسان ایرانی است که خدماتی همچون چت، تماس صوتی و تصویری، ایجاد گروه‌ها و کانال‌ها، و همچنین قابلیت پرداخت درون‌برنامه‌ای را ارائه می‌دهد."
  },
  {
    id: 19,
    name: "شنوتو",
    icon: "/brands/shenoto.png",
    category: "موسیقی",
    website: "shenoto.com",
    alternatives: ["کست‌باکس", "اسپاتیفای","اپل موزیک"],
    description: "شنوتو یک پلتفرم ایرانی برای گوش دادن به پادکست‌ها است که امکان اشتراک‌گذاری، دنبال کردن برنامه‌ها و دسترسی به محتوای متنوع صوتی را فراهم می‌کند."
  },
  {
    id: 20,
    name: "مایکت",
    icon: "/brands/myket.svg",
    category: "اندروید",
    website: "myket.ir",
    alternatives: ["گوگل‌پلی", "اپ‌استور"],
    description: "مایکت یک مارکت اندرویدی ایرانی است که امکان دانلود و خرید اپلیکیشن‌های مختلف را برای کاربران فراهم می‌کند."
  },
  {
    id: 21,
    name: "ویرگول",
    icon: "/brands/virgool.png",
    category: "نوشتن",
    website: "virgool.io",
    alternatives: ["مدیوم"],
    description: "ویرگول یک پلتفرم ایرانی برای انتشار مقالات، یادداشت‌ها و محتوای نوشتاری است که امکان اشتراک‌گذاری آسان و تعامل با نویسندگان را فراهم می‌کند."
  },
  {
    id: 22,
    name: "ایران‌تلنت",
    icon: "/brands/irantalent.svg",
    category: "استخدام",
    website: "irantalent.com",
    alternatives: ["لینکدین"],
    description: "ایران‌تلنت یک پلتفرم ایرانی برای جستجوی فرصت‌های شغلی و استخدام است که به کارجویان کمک می‌کند تا به راحتی با شرکت‌های مختلف ارتباط برقرار کنند."
  },
  {
    id: 23,
    name: "نواک",
    icon: "/brands/navaak.png",
    category: "موسیقی",
    website: "navaak.com",
    alternatives: ["اسپاتیفای","اپل موزیک","کست‌باکس"],
    description: "نواک یک سرویس پخش آنلاین موسیقی در ایران شامل هزاران قطعه موسیقی، ویدیو کلیپ (نماهنگ)، ریمیکس و پادکست قابل استفاده در وب، اندروید و iOS می‌باشد."
  },
  {
    id: 24,
    name: "آپارات گیم",
    icon: "/brands/aparat.png",
    category: "پخش ویدیو بازی",
    website: "https://game.aparat.com",
    alternatives: ["Twitch", "یوتیوب"],
    description: "آپارات گیم یک سرویس پخش آنلاین ویدیو بازی در ایران است که امکان تماشای استریم‌های زنده و ویدیوهای مربوط به بازی‌های مختلف را فراهم می‌کند."
  },
  {
    id: 25,
    name: "جاب ویژن",
    icon: "/brands/jobvision.png",
    category: "استخدام",
    website: "jobvision.ir",
    alternatives: ["لینکدین"],
    description: "جاب ویژن یک پلتفرم آنلاین استخدام در ایران است که به کارجویان و شرکت‌ها این امکان را می‌دهد که به راحتی فرصت‌های شغلی را پیدا کرده و استخدام کنند."
  },
  {
    id: 26,
    name: "رایچت",
    icon: "/brands/raychat.png",
    category: "خدمات",
    website: "raychat.io",
    alternatives: ["Crisp", "Zendesk"],
    description: "رایچت یک پلتفرم چت آنلاین ایرانی است که به کسب‌وکارها این امکان را می‌دهد تا به‌راحتی با مشتریان خود ارتباط برقرار کنند و پشتیبانی زنده ارائه دهند."
  },
  {
    id: 27,
    name: "تماشا",
    icon: "/brands/tamasha.svg",
    category: "ویدیو",
    website: "tamasha.com",
    alternatives: ["یوتیوب", "Twitch"],
    description: "تماشا یک پلتفرم ایرانی برای تماشای ویدیوهای آنلاین است که شامل فیلم، سریال، مستند و برنامه‌های تلویزیونی مختلف می‌باشد."
  },
  {
    id: 28,
    name: "نماشا",
    icon: "/brands/namasha.svg",
    category: "ویدیو",
    website: "namasha.com",
    alternatives: ["یوتیوب", "Twitch"],
    description: "نماشا یک پلتفرم ایرانی برای تماشای ویدیوهای آنلاین است که امکان مشاهده ویدیوهای مختلف شامل فیلم، سریال و کلیپ‌های کوتاه را فراهم می‌کند."
  },
  {
    id: 29,
    name: "لنز",
    icon: "/brands/lenz.svg",
    category: "پلتفرم ویدیو",
    website: "lenz.ir",
    alternatives: ["Netflix", "Disney+"],
    description: "لنز یک سرویس پخش ویدیو ایرانی است که امکان مشاهده فیلم، سریال، برنامه‌های تلویزیونی و ویدیوهای مختلف را به کاربران می‌دهد."
  },
  {
    id: 30,
    name: "روبیکا",
    icon: "/brands/rubika.webp",
    category: "شبکه اجتماعی",
    website: "rubika.ir",
    alternatives: ["تلگرام", "واتس‌اپ","اینستاگرام"],
    description: "روبیکا یک اپلیکیشن ایرانی چندمنظوره است که شامل خدمات مختلفی از جمله پیام‌رسانی، تماشای ویدیو، پرداخت آنلاین، خرید و فروش، و بازی‌های آنلاین می‌باشد."
  },
  {
    id: 31,
    name: "زبان شناس",
    icon: "/brands/zabanshenas.svg",
    category: "یادگیری زبان",
    website: "zabanshenas.com",
    alternatives: ["Duolingo", "Memrise"],
    description: "زبان شناس یک پلتفرم ایرانی برای یادگیری زبان‌های خارجی است که دوره‌های مختلف و ابزارهای متنوعی برای تقویت مهارت‌های زبانی ارائه می‌دهد."
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
]

// Get unique categories
const categories = ["همه دسته‌ها", ...new Set(platforms.map((platform) => platform.category))]

// Get unique alternatives
const alternatives = ["همه پلتفرم‌ها", ...new Set(platforms.flatMap((platform) => platform.alternatives))]

export default function IranianPlatformsLanding() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("همه دسته‌ها")
  const [selectedAlternative, setSelectedAlternative] = useState("همه پلتفرم‌ها")
  const [filteredPlatforms, setFilteredPlatforms] = useState(platforms)

  // Filter platforms based on search term, category, and alternative
  useEffect(() => {
    const results = platforms.filter((platform) => {
      const matchesSearch =
        platform.name.includes(searchTerm) ||
        platform.description.includes(searchTerm) ||
        platform.website.includes(searchTerm)

      const matchesCategory = selectedCategory === "همه دسته‌ها" || platform.category === selectedCategory

      const matchesAlternative =
        selectedAlternative === "همه پلتفرم‌ها" || platform.alternatives.includes(selectedAlternative)

      return matchesSearch && matchesCategory && matchesAlternative
    })

    setFilteredPlatforms(results)
  }, [searchTerm, selectedCategory, selectedAlternative])

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <MainNav />

      <section className="container py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              پلتفرم‌های ایرانی، جایگزین‌های بومی
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              مجموعه‌ای از بهترین پلتفرم‌های ایرانی که می‌توانند جایگزین مناسبی برای سرویس‌های جهانی باشند
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg">مشاهده پلتفرم‌ها</Button>
              <Link href="/submit">
                <Button size="lg" variant="outline">
                  معرفی پلتفرم جدید
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/hero.svg?height=400&width=400" alt="پلتفرم‌های ایرانی" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <h2 className="mb-8 text-center text-3xl font-bold">پلتفرم‌های محبوب ایرانی</h2>

        <div className="mx-auto mb-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                  selectedCategory === category
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category !== "همه دسته‌ها" && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="جستجوی پلتفرم..."
              className="w-full rounded-md border border-input bg-background py-2 pr-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="platform-filter" className="mb-2 block text-sm font-medium">
              فیلتر بر اساس جایگزین پلتفرم خارجی:
            </label>
            <select
              id="platform-filter"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={selectedAlternative}
              onChange={(e) => setSelectedAlternative(e.target.value)}
            >
              {alternatives.map((alternative, index) => (
                <option key={index} value={alternative}>
                  {alternative === "همه پلتفرم‌ها" ? alternative : `جایگزین ${alternative}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredPlatforms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">هیچ پلتفرمی با معیارهای جستجوی شما یافت نشد.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("همه دسته‌ها")
                setSelectedAlternative("همه پلتفرم‌ها")
              }}
            >
              پاک کردن فیلترها
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPlatforms.map((platform) => (
              <Card key={platform.id} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={platform.icon}  className="h-10 w-10 text-primary rounded-lg" />
                      <CardTitle>{platform.name}</CardTitle>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {platform.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={`https://${platform.website}`} className="text-sm text-primary hover:underline">
                    {platform.website}
                  </a>

                  <div className="flex flex-wrap gap-2">
                    {platform.alternatives.map((alternative, index) => (
                      <span key={index} className="inline-flex rounded-full bg-muted px-3 py-1 text-xs">
                        جایگزین {alternative}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="bg-muted py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">چرا پلتفرم‌های ایرانی؟</h2>
            <p className="mt-4 text-muted-foreground">
              استفاده از پلتفرم‌های ایرانی مزایای متعددی دارد که به رشد اقتصاد دیجیتال کشور کمک می‌کند
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">حمایت از تولید داخلی</h3>
              <p className="mt-2 text-muted-foreground">
                با استفاده از پلتفرم‌های ایرانی، از کسب و کارهای داخلی و توسعه‌دهندگان ایرانی حمایت می‌کنید
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">پشتیبانی به زبان فارسی</h3>
              <p className="mt-2 text-muted-foreground">
                دسترسی به پشتیبانی فنی به زبان فارسی و درک بهتر نیازهای کاربران ایرانی
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">سازگاری با نیازهای بومی</h3>
              <p className="mt-2 text-muted-foreground">طراحی شده متناسب با فرهنگ، زبان و نیازهای خاص کاربران ایرانی</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Link href="/support" className="inline-block">
              <div className="inline-block mb-4">
                <Heart className="h-16 w-16 text-red-500 fill-red-500 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold">حمایت از پروژه</h2>
              <p className="mt-4 text-muted-foreground">
                با حمایت از این پروژه، به ما کمک کنید تا بتوانیم پلتفرم‌های ایرانی بیشتری را معرفی کنیم و به توسعه
                اکوسیستم دیجیتال کشور کمک کنیم.
              </p>
              <div className="mt-8">
                <Button className="bg-red-500 hover:bg-red-600">
                  <Heart className="mr-2 h-4 w-4 fill-white" />
                  مشاهده روش‌های حمایت
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">پلتفرم‌های ایرانی</h3>
              <div className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                <span className="font-bold">پلتفرم‌های ایرانی</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                معرفی و مقایسه بهترین پلتفرم‌های ایرانی جایگزین سرویس‌های خارجی
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">دسترسی سریع</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    صفحه اصلی
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground">
                    حمایت
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">دسته‌بندی‌ها</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    پیام‌رسان‌ها
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    فروشگاه‌های آنلاین
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    سرویس‌های ویدیویی
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    موتورهای جستجو
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">تماس با ما</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">ایمیل: info@iranianplatforms.ir</li>
                <li className="text-muted-foreground">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li className="text-muted-foreground">آدرس: تهران، خیابان آزادی</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} تمامی حقوق برای پلتفرم‌های ایرانی محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper function to get the icon for a category
function getCategoryIcon(category) {
  switch (category) {
    case "پیام‌رسان":
      return <MessageSquare className="mr-1 h-3 w-3" />
    case "فروشگاه":
      return <ShoppingCart className="mr-1 h-3 w-3" />
    case "ویدیو":
      return <Video className="mr-1 h-3 w-3" />
    case "موسیقی":
      return <Music className="mr-1 h-3 w-3" />
    case "جستجو":
      return <Search className="mr-1 h-3 w-3" />
    case "نقشه":
      return <Map className="mr-1 h-3 w-3" />
    case "ذخیره‌سازی":
      return <Cloud className="mr-1 h-3 w-3" />
    case "ایمیل":
      return <Mail className="mr-1 h-3 w-3" />
    default:
      return null
  }
}

