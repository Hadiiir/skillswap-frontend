"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import { Star, Zap, Search, TrendingUp, Users, Shield, Clock, ArrowRight, Play, CheckCircle, User } from "lucide-react"

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [searchQuery, setSearchQuery] = useState("")
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const featuredSkills = [
    {
      id: 1,
      title: "تصميم الشعارات الاحترافية",
      titleEn: "Professional Logo Design",
      user: "أحمد حسن",
      userEn: "Ahmed Hassan",
      avatar: "/diverse-user-avatars.png",
      points: 50,
      rating: 4.9,
      reviews: 23,
      category: "تصميم",
      categoryEn: "Design",
      image: "/logo-design-portfolio.png",
      tags: ["Photoshop", "Illustrator", "Branding"],
    },
    {
      id: 2,
      title: "تطوير تطبيقات React",
      titleEn: "React App Development",
      user: "سارة أحمد",
      userEn: "Sarah Ahmed",
      avatar: "/female-developer.png",
      points: 80,
      rating: 4.8,
      reviews: 31,
      category: "برمجة",
      categoryEn: "Programming",
      image: "/react-development-concept.png",
      tags: ["React", "JavaScript", "TypeScript"],
    },
    {
      id: 3,
      title: "الترجمة الطبية المتخصصة",
      titleEn: "Medical Translation",
      user: "د. عمر علي",
      userEn: "Dr. Omar Ali",
      avatar: "/doctor-translator.jpg",
      points: 35,
      rating: 5.0,
      reviews: 18,
      category: "ترجمة",
      categoryEn: "Translation",
      image: "/medical-translation.png",
      tags: ["Medical", "Arabic", "English"],
    },
  ]

  const categories = [
    { name: "التصميم", nameEn: "Design", icon: "🎨", count: 245, color: "bg-blue-500" },
    { name: "البرمجة", nameEn: "Programming", icon: "💻", count: 189, color: "bg-green-500" },
    { name: "الترجمة", nameEn: "Translation", icon: "🌐", count: 156, color: "bg-purple-500" },
    { name: "التدريب", nameEn: "Training", icon: "📚", count: 134, color: "bg-orange-500" },
    { name: "التسويق", nameEn: "Marketing", icon: "📈", count: 98, color: "bg-red-500" },
    { name: "الكتابة", nameEn: "Writing", icon: "✍️", count: 87, color: "bg-yellow-500" },
  ]

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {isRTL ? "تبادل المهارات بسهولة وأمان" : "Exchange Skills Easily and Safely"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {isRTL
                ? "منصة تبادل المهارات الأولى في المنطقة. تعلم مهارات جديدة وعلم الآخرين مهاراتك مقابل النقاط"
                : "The first skill exchange platform in the region. Learn new skills and teach others your skills in exchange for points"}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={
                    isRTL ? "ابحث عن المهارة التي تريد تعلمها..." : "Search for the skill you want to learn..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-12 py-4 text-lg rounded-full border-2 focus:border-primary"
                />
                <Button
                  size="lg"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Play className="mr-2 h-5 w-5" />
                {isRTL ? "ابدأ الآن" : "Get Started"}
              </Button>
              <Button size="lg" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                {isRTL ? "تصفح المهارات الشائعة" : "Browse Popular Skills"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{isRTL ? "لماذا تختار SkillSwap؟" : "Why Choose SkillSwap?"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL
                ? "نوفر لك بيئة آمنة ومبتكرة لتبادل المهارات مع أشخاص من جميع أنحاء العالم"
                : "We provide you with a safe and innovative environment to exchange skills with people from all over the world"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{isRTL ? "آمان وموثوقية" : "Safe & Reliable"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {isRTL
                    ? "نظام تقييم شامل وحماية كاملة لجميع المعاملات"
                    : "Comprehensive rating system and full protection for all transactions"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{isRTL ? "مجتمع نشط" : "Active Community"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {isRTL
                    ? "انضم إلى مجتمع من المحترفين والخبراء في مختلف المجالات"
                    : "Join a community of professionals and experts in various fields"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{isRTL ? "مرونة في الوقت" : "Time Flexibility"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {isRTL
                    ? "تعلم وعلم في الوقت الذي يناسبك من أي مكان في العالم"
                    : "Learn and teach at your convenient time from anywhere in the world"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{isRTL ? "تصفح حسب الفئات" : "Browse by Categories"}</h2>
            <p className="text-muted-foreground">
              {isRTL ? "اكتشف المهارات في مختلف المجالات" : "Discover skills in various fields"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-all cursor-pointer group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{isRTL ? category.name : category.nameEn}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} {isRTL ? "مهارة" : "skills"}
                  </p>
                  <div
                    className={`w-full h-1 ${category.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">{isRTL ? "المهارات المميزة" : "Featured Skills"}</h2>
              <p className="text-muted-foreground">
                {isRTL ? "أفضل المهارات المتاحة حالياً" : "Best skills currently available"}
              </p>
            </div>
            <Button variant="outline">
              {isRTL ? "عرض الكل" : "View All"}
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-lg transition-all group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={isRTL ? skill.title : skill.titleEn}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary/90">
                    {isRTL ? skill.category : skill.categoryEn}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 line-clamp-2">{isRTL ? skill.title : skill.titleEn}</CardTitle>
                      <div className="flex items-center gap-2">
                        <img
                          src={skill.avatar || "/placeholder.svg"}
                          alt={isRTL ? skill.user : skill.userEn}
                          className="w-6 h-6 rounded-full"
                        />
                        <CardDescription>{isRTL ? skill.user : skill.userEn}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{skill.rating}</span>
                      <span className="text-sm text-muted-foreground">({skill.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">
                        {skill.points} {isRTL ? "نقطة" : "points"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{isRTL ? "كيف يعمل SkillSwap؟" : "How Does SkillSwap Work?"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isRTL ? "ثلاث خطوات بسيطة للبدء في تبادل المهارات" : "Three simple steps to start exchanging skills"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: isRTL ? "أنشئ حسابك" : "Create Account",
                description: isRTL
                  ? "سجل مجاناً وأضف مهاراتك واهتماماتك"
                  : "Register for free and add your skills and interests",
                icon: User,
              },
              {
                step: "2",
                title: isRTL ? "ابحث وتواصل" : "Search & Connect",
                description: isRTL
                  ? "ابحث عن المهارات التي تريدها وتواصل مع الخبراء"
                  : "Search for skills you want and connect with experts",
                icon: Search,
              },
              {
                step: "3",
                title: isRTL ? "تبادل وتعلم" : "Exchange & Learn",
                description: isRTL
                  ? "ابدأ التبادل واكسب النقاط لتعلم مهارات جديدة"
                  : "Start exchanging and earn points to learn new skills",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-primary-foreground/80">{isRTL ? "مهارة متاحة" : "Available Skills"}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-primary-foreground/80">{isRTL ? "مستخدم نشط" : "Active Users"}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,400+</div>
              <div className="text-primary-foreground/80">{isRTL ? "عملية تبادل" : "Skill Exchanges"}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-primary-foreground/80">{isRTL ? "متوسط التقييم" : "Average Rating"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {isRTL ? "ابدأ رحلتك في تبادل المهارات اليوم" : "Start Your Skill Exchange Journey Today"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {isRTL
                ? "انضم إلى آلاف المستخدمين الذين يتبادلون المهارات ويطورون أنفسهم يومياً"
                : "Join thousands of users who exchange skills and develop themselves daily"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <User className="mr-2 h-5 w-5" />
                {isRTL ? "إنشاء حساب مجاني" : "Create Free Account"}
              </Button>
              <Button size="lg" variant="outline">
                <Search className="mr-2 h-5 w-5" />
                {isRTL ? "تصفح المهارات" : "Browse Skills"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">SkillSwap</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {isRTL
                  ? "منصة تبادل المهارات الأولى في المنطقة العربية"
                  : "The first skill exchange platform in the Arab region"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{isRTL ? "روابط سريعة" : "Quick Links"}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "الرئيسية" : "Home"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "المهارات" : "Skills"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "الفئات" : "Categories"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "حول المنصة" : "About"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{isRTL ? "الدعم" : "Support"}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "مركز المساعدة" : "Help Center"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "اتصل بنا" : "Contact Us"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "الشروط والأحكام" : "Terms"}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {isRTL ? "سياسة الخصوصية" : "Privacy"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{isRTL ? "تابعنا" : "Follow Us"}</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 SkillSwap. {isRTL ? "جميع الحقوق محفوظة" : "All rights reserved"}.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
