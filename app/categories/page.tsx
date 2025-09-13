"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import { Search, TrendingUp, Zap, ArrowRight, BookOpen, Star } from "lucide-react"

export default function CategoriesPage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [searchQuery, setSearchQuery] = useState("")
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const categories = [
    {
      id: 1,
      name: "البرمجة وتطوير الويب",
      nameEn: "Programming & Web Development",
      description: "تعلم لغات البرمجة وتطوير المواقع والتطبيقات",
      descriptionEn: "Learn programming languages and web/app development",
      icon: "💻",
      color: "bg-blue-500",
      skillsCount: 245,
      instructorsCount: 89,
      averageRating: 4.8,
      popularSkills: ["React", "JavaScript", "Python", "Node.js"],
      image: "/react-development-concept.png",
      trending: true,
    },
    {
      id: 2,
      name: "التصميم والإبداع",
      nameEn: "Design & Creativity",
      description: "تصميم الجرافيك، UI/UX، والفنون الرقمية",
      descriptionEn: "Graphic design, UI/UX, and digital arts",
      icon: "🎨",
      color: "bg-purple-500",
      skillsCount: 189,
      instructorsCount: 67,
      averageRating: 4.7,
      popularSkills: ["Photoshop", "Figma", "Illustrator", "UI/UX"],
      image: "/logo-design-portfolio.png",
      trending: false,
    },
    {
      id: 3,
      name: "الترجمة واللغات",
      nameEn: "Translation & Languages",
      description: "ترجمة النصوص وتعلم اللغات المختلفة",
      descriptionEn: "Text translation and learning different languages",
      icon: "🌐",
      color: "bg-green-500",
      skillsCount: 156,
      instructorsCount: 45,
      averageRating: 4.9,
      popularSkills: ["Arabic", "English", "French", "Medical Translation"],
      image: "/medical-translation.png",
      trending: true,
    },
    {
      id: 4,
      name: "التسويق الرقمي",
      nameEn: "Digital Marketing",
      description: "التسويق عبر الإنترنت ووسائل التواصل الاجتماعي",
      descriptionEn: "Online marketing and social media",
      icon: "📈",
      color: "bg-red-500",
      skillsCount: 134,
      instructorsCount: 52,
      averageRating: 4.6,
      popularSkills: ["SEO", "Social Media", "Google Ads", "Analytics"],
      image: "/placeholder.svg?height=200&width=300",
      trending: false,
    },
    {
      id: 5,
      name: "الكتابة والمحتوى",
      nameEn: "Writing & Content",
      description: "كتابة المحتوى والتحرير والصحافة",
      descriptionEn: "Content writing, editing, and journalism",
      icon: "✍️",
      color: "bg-yellow-500",
      skillsCount: 98,
      instructorsCount: 38,
      averageRating: 4.5,
      popularSkills: ["Copywriting", "Content Strategy", "Blogging", "Editing"],
      image: "/placeholder.svg?height=200&width=300",
      trending: false,
    },
    {
      id: 6,
      name: "التدريب والتطوير",
      nameEn: "Training & Development",
      description: "التدريب المهني وتطوير المهارات الشخصية",
      descriptionEn: "Professional training and personal skill development",
      icon: "📚",
      color: "bg-indigo-500",
      skillsCount: 87,
      instructorsCount: 29,
      averageRating: 4.7,
      popularSkills: ["Leadership", "Communication", "Project Management", "Coaching"],
      image: "/placeholder.svg?height=200&width=300",
      trending: true,
    },
    {
      id: 7,
      name: "الأعمال والمالية",
      nameEn: "Business & Finance",
      description: "إدارة الأعمال والتخطيط المالي والاستثمار",
      descriptionEn: "Business management, financial planning, and investment",
      icon: "💼",
      color: "bg-teal-500",
      skillsCount: 76,
      instructorsCount: 34,
      averageRating: 4.6,
      popularSkills: ["Business Plan", "Accounting", "Investment", "Entrepreneurship"],
      image: "/placeholder.svg?height=200&width=300",
      trending: false,
    },
    {
      id: 8,
      name: "التكنولوجيا والذكاء الاصطناعي",
      nameEn: "Technology & AI",
      description: "الذكاء الاصطناعي وتعلم الآلة والتقنيات الحديثة",
      descriptionEn: "Artificial intelligence, machine learning, and modern technologies",
      icon: "🤖",
      color: "bg-cyan-500",
      skillsCount: 65,
      instructorsCount: 23,
      averageRating: 4.9,
      popularSkills: ["Machine Learning", "AI", "Data Science", "Deep Learning"],
      image: "/placeholder.svg?height=200&width=300",
      trending: true,
    },
  ]

  const filteredCategories = categories.filter((category) =>
    (isRTL ? category.name : category.nameEn).toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const trendingCategories = categories.filter((cat) => cat.trending)
  const totalSkills = categories.reduce((sum, cat) => sum + cat.skillsCount, 0)
  const totalInstructors = categories.reduce((sum, cat) => sum + cat.instructorsCount, 0)

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? "تصفح الفئات" : "Browse Categories"}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isRTL
              ? "اكتشف المهارات المنظمة حسب الفئات واختر ما يناسب اهتماماتك"
              : "Discover skills organized by categories and choose what suits your interests"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{categories.length}</div>
              <div className="text-muted-foreground">{isRTL ? "فئة متاحة" : "Categories Available"}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalSkills}</div>
              <div className="text-muted-foreground">{isRTL ? "مهارة إجمالية" : "Total Skills"}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{totalInstructors}</div>
              <div className="text-muted-foreground">{isRTL ? "مدرب خبير" : "Expert Instructors"}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.7</div>
              <div className="text-muted-foreground">{isRTL ? "متوسط التقييم" : "Average Rating"}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={isRTL ? "ابحث في الفئات..." : "Search categories..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-12 py-3 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Trending Categories */}
        {trendingCategories.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">{isRTL ? "الفئات الرائجة" : "Trending Categories"}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-all cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={isRTL ? category.name : category.nameEn}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-red-500/90 text-white">🔥 {isRTL ? "رائج" : "Trending"}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <h3 className="font-semibold mb-2 line-clamp-2">{isRTL ? category.name : category.nameEn}</h3>
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{category.skillsCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{category.averageRating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">{isRTL ? "جميع الفئات" : "All Categories"}</h2>
          {filteredCategories.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={isRTL ? category.name : category.nameEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        {category.trending && (
                          <Badge className="absolute top-2 right-2 bg-red-500/90 text-white text-xs">
                            🔥 {isRTL ? "رائج" : "Hot"}
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-2xl">{category.icon}</div>
                              <h3 className="text-xl font-semibold">{isRTL ? category.name : category.nameEn}</h3>
                            </div>
                            <p className="text-muted-foreground line-clamp-2">
                              {isRTL ? category.description : category.descriptionEn}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-lg text-primary">{category.skillsCount}</div>
                            <div className="text-muted-foreground">{isRTL ? "مهارة" : "Skills"}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg text-primary">{category.instructorsCount}</div>
                            <div className="text-muted-foreground">{isRTL ? "مدرب" : "Instructors"}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg text-primary">{category.averageRating}</div>
                            <div className="text-muted-foreground flex items-center justify-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {isRTL ? "تقييم" : "Rating"}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">
                            {isRTL ? "المهارات الشائعة:" : "Popular Skills:"}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {category.popularSkills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            {isRTL ? "تصفح المهارات" : "Browse Skills"}
                            <ArrowRight className="w-4 h-4 mr-2" />
                          </Button>
                          <div className={`w-3 h-3 rounded-full ${category.color}`} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isRTL ? "لم يتم العثور على فئات" : "No Categories Found"}</h3>
              <p className="text-muted-foreground mb-4">
                {isRTL ? "جرب البحث بكلمات مختلفة" : "Try searching with different keywords"}
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                {isRTL ? "مسح البحث" : "Clear Search"}
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isRTL ? "لم تجد ما تبحث عنه؟" : "Didn't find what you're looking for?"}
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              {isRTL
                ? "يمكنك طلب مهارة جديدة أو التواصل معنا لإضافة فئات جديدة تناسب احتياجاتك"
                : "You can request a new skill or contact us to add new categories that suit your needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Zap className="w-4 h-4 mr-2" />
                {isRTL ? "طلب مهارة جديدة" : "Request New Skill"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                {isRTL ? "تواصل معنا" : "Contact Us"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
