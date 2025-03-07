"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"

export default function FAQPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-background font-sans">
      <MainNav />

      <section className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">سوالات متداول</h1>
          <p className="mt-6 text-lg text-muted-foreground">پاسخ به سوالات رایج درباره پلتفرم‌های ایرانی و این وب‌سایت</p>
        </div>
      </section>

      <section className="container pb-24">
        <div className="mx-auto max-w-3xl">
          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">هدف این وب‌سایت چیست؟</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  هدف اصلی این وب‌سایت، معرفی و مقایسه پلتفرم‌های ایرانی است که می‌توانند جایگزین مناسبی برای سرویس‌های
                  خارجی باشند. ما تلاش می‌کنیم تا با معرفی این پلتفرم‌ها، به کاربران ایرانی کمک کنیم تا بتوانند از خدمات
                  بومی با کیفیت استفاده کنند و همچنین به رشد اکوسیستم دیجیتال کشور کمک کنیم.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  چگونه می‌توانم یک پلتفرم ایرانی را معرفی کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  شما می‌توانید از طریق فرم "معرفی پلتفرم جدید" در صفحه اصلی یا بخش حمایت، پلتفرم مورد نظر خود را به ما
                  معرفی کنید. لطفاً اطلاعات کاملی از پلتفرم شامل نام، وب‌سایت، دسته‌بندی، توضیحات و اینکه جایگزین چه سرویس
                  خارجی است را ارائه دهید. تیم ما پس از بررسی، آن را به لیست پلتفرم‌ها اضافه خواهد کرد.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">معیارهای انتخاب پلتفرم‌ها چیست؟</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ما پلتفرم‌هایی را انتخاب می‌کنیم که: ۱) توسط توسعه‌دهندگان ایرانی ساخته شده باشند، ۲) کیفیت قابل قبولی
                  داشته باشند، ۳) پشتیبانی فعال داشته باشند، ۴) جایگزین مناسبی برای سرویس‌های خارجی باشند، و ۵) با قوانین
                  و مقررات کشور سازگار باشند. البته ما سعی می‌کنیم تنوع پلتفرم‌ها را نیز حفظ کنیم تا کاربران بتوانند بر
                  اساس نیاز خود انتخاب کنند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  آیا استفاده از این وب‌سایت رایگان است؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  بله، استفاده از این وب‌سایت کاملاً رایگان است. ما هیچ هزینه‌ای برای معرفی پلتفرم‌ها یا استفاده از اطلاعات
                  سایت دریافت نمی‌کنیم. هزینه‌های نگهداری و توسعه سایت از طریق حمایت‌های داوطلبانه کاربران و علاقه‌مندان
                  تأمین می‌شود.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  چگونه می‌توانم از این پروژه حمایت کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  شما می‌توانید به چند روش از این پروژه حمایت کنید: ۱) حمایت مالی از طریق لینک پرداخت در صفحه حمایت، ۲)
                  معرفی پلتفرم‌های جدید، ۳) اشتراک‌گذاری سایت در شبکه‌های اجتماعی، ۴) مشارکت در کد پروژه اگر برنامه‌نویس
                  هستید، و ۵) ارسال بازخورد و پیشنهادات برای بهبود سایت. هر نوع حمایتی، کمک بزرگی به ادامه این پروژه
                  خواهد بود.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium">
                  آیا این وب‌سایت با پلتفرم‌های معرفی شده ارتباط تجاری دارد؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  خیر، این وب‌سایت یک پروژه مستقل است و هیچ ارتباط تجاری با پلتفرم‌های معرفی شده ندارد. ما صرفاً به دنبال
                  معرفی و مقایسه پلتفرم‌های ایرانی هستیم تا به کاربران در انتخاب سرویس مناسب کمک کنیم. معرفی یک پلتفرم در
                  این سایت به معنای تأیید کامل آن نیست و کاربران باید بر اساس نیاز خود تصمیم بگیرند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium">
                  چگونه می‌توانم نظر یا انتقاد خود را درباره یک پلتفرم ثبت کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  در حال حاضر، امکان ثبت نظر مستقیم برای پلتفرم‌ها وجود ندارد، اما شما می‌توانید از طریق فرم تماس با ما در
                  صفحه حمایت، نظرات و انتقادات خود را با ما در میان بگذارید. ما در نظر داریم در آینده، امکان ثبت نظر و
                  امتیازدهی به پلتفرم‌ها را نیز اضافه کنیم.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium">
                  آیا می‌توانم در توسعه این وب‌سایت مشارکت کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  بله، این پروژه متن‌باز است و ما از مشارکت علاقه‌مندان استقبال می‌کنیم. اگر برنامه‌نویس هستید، می‌توانید به
                  مخزن گیت‌هاب پروژه مراجعه کنید و در توسعه کد مشارکت کنید. همچنین اگر در زمینه‌های دیگر مانند طراحی،
                  محتوا، یا ترجمه تخصص دارید، می‌توانید از طریق فرم تماس با ما، آمادگی خود را اعلام کنید.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-medium">
                  برنامه‌های آینده برای توسعه سایت چیست؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ما برنامه‌های متعددی برای توسعه سایت داریم، از جمله: ۱) افزودن سیستم نظردهی و امتیازدهی به پلتفرم‌ها، ۲)
                  ایجاد مقایسه‌های تخصصی بین پلتفرم‌های مشابه، ۳) افزودن راهنماهای استفاده از پلتفرم‌ها، ۴) توسعه اپلیکیشن
                  موبایل، و ۵) ایجاد انجمن گفتگو برای کاربران. البته اولویت‌بندی این برنامه‌ها بر اساس بازخوردهای کاربران
                  و منابع موجود تعیین می‌شود.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-medium">
                  چگونه می‌توانم از به‌روزرسانی‌های سایت مطلع شوم؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  شما می‌توانید با دنبال کردن ما در شبکه‌های اجتماعی یا عضویت در خبرنامه ایمیلی (که به زودی راه‌اندازی
                  می‌شود)، از آخرین به‌روزرسانی‌ها و اخبار سایت مطلع شوید. همچنین می‌توانید به طور منظم به سایت سر بزنید تا
                  از پلتفرم‌های جدید و امکانات اضافه شده آگاه شوید.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
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

