"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import {
  Star,
  Search,
  Filter,
  Grid,
  List,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Heart,
  BookOpen,
  Award,
  MapPin,
  Eye,
} from "lucide-react"

export default function SkillsPage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const categories = [
    { value: "all", label: isRTL ? "جميع الفئات" : "All Categories" },
    { value: "programming", label: isRTL ? "البرمجة" : "Programming" },
    { value: "design", label: isRTL ? "التصميم" : "Design" },
    { value: "translation", label: isRTL ? "الترجمة" : "Translation" },
    { value: "marketing", label: isRTL ? "التسويق" : "Marketing" },
    { value: "writing", label: isRTL ? "الكتابة" : "Writing" },
    { value: "training", label: isRTL ? "التدريب" : "Training" },
  ]

  const levels = [
    { value: "all", label: isRTL ? "جميع المستويات" : "All Levels" },
    { value: "beginner", label: isRTL ? "مبتدئ" : "Beginner" },
    { value: "intermediate", label: isRTL ? "متوسط" : "Intermediate" },
    { value: "advanced", label: isRTL ? "متقدم" : "Advanced" },
    { value: "expert", label: isRTL ? "خبير" : "Expert" },
  ]

  const sortOptions = [
    { value: "popular", label: isRTL ? "الأكثر شعبية" : "Most Popular" },
    { value: "rating", label: isRTL ? "الأعلى تقييماً" : "Highest Rated" },
    { value: "newest", label: isRTL ? "الأحدث" : "Newest" },
    { value: "price-low", label: isRTL ? "السعر: من الأقل للأعلى" : "Price: Low to High" },
    { value: "price-high", label: isRTL ? "السعر: من الأعلى للأقل" : "Price: High to Low" },
  ]

  const skills = [
    {
      id: 1,
      title: "تطوير تطبيقات React المتقدمة",
      titleEn: "Advanced React App Development",
      description: "تعلم بناء تطبيقات React حديثة باستخدام أحدث التقنيات والممارسات",
      descriptionEn: "Learn to build modern React applications using the latest technologies and practices",
      instructor: "أحمد محمد",
      instructorEn: "Ahmed Mohamed",
      avatar: "/diverse-user-avatars.png",
      category: "programming",
      categoryLabel: isRTL ? "البرمجة" : "Programming",
      level: "advanced",
      levelLabel: isRTL ? "متقدم" : "Advanced",
      points: 120,
      rating: 4.9,
      reviews: 47,
      students: 156,
      duration: "8 ساعات",
      durationEn: "8 hours",
      image: "/react-development-concept.png",
      tags: ["React", "JavaScript", "TypeScript", "Next.js"],
      location: "الرياض",
      locationEn: "Riyadh",
      responseTime: "خلال ساعة",
      responseTimeEn: "Within 1 hour",
      featured: true,
      verified: true,
    },
    {
      id: 2,
      title: "تصميم الشعارات الاحترافية",
      titleEn: "Professional Logo Design",
      description: "تعلم أساسيات وتقنيات تصميم الشعارات الاحترافية باستخدام Adobe Illustrator",
      descriptionEn: "Learn the fundamentals and techniques of professional logo design using Adobe Illustrator",
      instructor: "سارة أحمد",
      instructorEn: "Sarah Ahmed",
      avatar: "/female-developer.png",
      category: "design",
      categoryLabel: isRTL ? "التصميم" : "Design",
      level: "intermediate",
      levelLabel: isRTL ? "متوسط" : "Intermediate",
      points: 80,
      rating: 4.8,
      reviews: 32,
      students: 89,
      duration: "6 ساعات",
      durationEn: "6 hours",
      image: "/logo-design-portfolio.png",
      tags: ["Illustrator", "Photoshop", "Branding", "Design"],
      location: "جدة",
      locationEn: "Jeddah",
      responseTime: "خلال 30 دقيقة",
      responseTimeEn: "Within 30 minutes",
      featured: false,
      verified: true,
    },
    {
      id: 3,
      title: "الترجمة الطبية المتخصصة",
      titleEn: "Specialized Medical Translation",
      description: "تعلم ترجمة النصوص الطبية والعلمية بدقة واحترافية عالية",
      descriptionEn: "Learn to translate medical and scientific texts with high accuracy and professionalism",
      instructor: "د. عمر علي",
      instructorEn: "Dr. Omar Ali",
      avatar: "/doctor-translator.jpg",
      category: "translation",
      categoryLabel: isRTL ? "الترجمة" : "Translation",
      level: "expert",
      levelLabel: isRTL ? "خبير" : "Expert",
      points: 150,
      rating: 5.0,
      reviews: 28,
      students: 45,
      duration: "10 ساعات",
      durationEn: "10 hours",
      image: "/medical-translation.png",
      tags: ["Medical", "Translation", "Arabic", "English"],
      location: "الدمام",
      locationEn: "Dammam",
      responseTime: "خلال ساعتين",
      responseTimeEn: "Within 2 hours",
      featured: true,
      verified: true,
    },
    {
      id: 4,
      title: "التسويق الرقمي للمبتدئين",
      titleEn: "Digital Marketing for Beginners",
      description: "تعلم أساسيات التسويق الرقمي ووسائل التواصل الاجتماعي",
      descriptionEn: "Learn the basics of digital marketing and social media",
      instructor: "فاطمة حسن",
      instructorEn: "Fatima Hassan",
      avatar: "/diverse-user-avatars.png",
      category: "marketing",
      categoryLabel: isRTL ? "التسويق" : "Marketing",
      level: "beginner",
      levelLabel: isRTL ? "مبتدئ" : "Beginner",
      points: 60,
      rating: 4.7,
      reviews: 19,
      students: 67,
      duration: "5 ساعات",
      durationEn: "5 hours",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Marketing", "Social Media", "SEO", "Analytics"],
      location: "الكويت",
      locationEn: "Kuwait",
      responseTime: "خلال 3 ساعات",
      responseTimeEn: "Within 3 hours",
      featured: false,
      verified: false,
    },
    {
      id: 5,
      title: "كتابة المحتوى الإبداعي",
      titleEn: "Creative Content Writing",
      description: "تطوير مهارات الكتابة الإبداعية وإنتاج محتوى جذاب",
      descriptionEn: "Develop creative writing skills and produce engaging content",
      instructor: "محمد الأحمد",
      instructorEn: "Mohamed Al-Ahmad",
      avatar: "/diverse-user-avatars.png",
      category: "writing",
      categoryLabel: isRTL ? "الكتابة" : "Writing",
      level: "intermediate",
      levelLabel: isRTL ? "متوسط" : "Intermediate",
      points: 70,
      rating: 4.6,
      reviews: 24,
      students: 38,
      duration: "7 ساعات",
      durationEn: "7 hours",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Writing", "Content", "Copywriting", "Storytelling"],
      location: "دبي",
      locationEn: "Dubai",
      responseTime: "خلال ساعة",
      responseTimeEn: "Within 1 hour",
      featured: false,
      verified: true,
    },
    {
      id: 6,
      title: "تدريب المهارات القيادية",
      titleEn: "Leadership Skills Training",
      description: "تطوير المهارات القيادية وإدارة الفرق بفعالية",
      descriptionEn: "Develop leadership skills and manage teams effectively",
      instructor: "ليلى محمود",
      instructorEn: "Layla Mahmoud",
      avatar: "/diverse-user-avatars.png",
      category: "training",
      categoryLabel: isRTL ? "التدريب" : "Training",
      level: "advanced",
      levelLabel: isRTL ? "متقدم" : "Advanced",
      points: 100,
      rating: 4.8,
      reviews: 35,
      students: 72,
      duration: "12 ساعة",
      durationEn: "12 hours",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Leadership", "Management", "Communication", "Team Building"],
      location: "الرياض",
      locationEn: "Riyadh",
      responseTime: "خلال 4 ساعات",
      responseTimeEn: "Within 4 hours",
      featured: true,
      verified: true,
    },
  ]

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructorEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || skill.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  const sortedSkills = [...filteredSkills].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "price-low":
        return a.points - b.points
      case "price-high":
        return b.points - a.points
      default: // popular
        return b.students - a.students
    }
  })

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? "تصفح المهارات" : "Browse Skills"}</h1>
          <p className="text-xl text-muted-foreground">
            {isRTL
              ? "اكتشف آلاف المهارات من خبراء حول العالم"
              : "Discover thousands of skills from experts around the world"}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={
                    isRTL
                      ? "ابحث عن المهارات، المدربين، أو الكلمات المفتاحية..."
                      : "Search for skills, instructors, or keywords..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-12 py-3 text-lg"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2 mr-auto">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {isRTL ? `تم العثور على ${sortedSkills.length} مهارة` : `Found ${sortedSkills.length} skills`}
          </p>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            {isRTL ? "مرشحات متقدمة" : "Advanced Filters"}
          </Button>
        </div>

        {/* Skills Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSkills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-lg transition-all group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={isRTL ? skill.title : skill.titleEn}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className="bg-primary/90">{skill.levelLabel}</Badge>
                    {skill.featured && <Badge className="bg-yellow-500/90">⭐ {isRTL ? "مميز" : "Featured"}</Badge>}
                  </div>
                  <div className="absolute top-3 left-3">
                    <Button variant="ghost" size="sm" className="p-2 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{skill.categoryLabel}</Badge>
                    {skill.verified && (
                      <div className="flex items-center gap-1 text-primary">
                        <Award className="w-4 h-4" />
                        <span className="text-xs">{isRTL ? "موثق" : "Verified"}</span>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2 mb-2">{isRTL ? skill.title : skill.titleEn}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {isRTL ? skill.description : skill.descriptionEn}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={skill.avatar || "/placeholder.svg"} alt={skill.instructor} />
                      <AvatarFallback>
                        {(isRTL ? skill.instructor : skill.instructorEn)
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{isRTL ? skill.instructor : skill.instructorEn}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{isRTL ? skill.location : skill.locationEn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {skill.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {skill.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{skill.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
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

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{skill.students}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{isRTL ? skill.duration : skill.durationEn}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{isRTL ? "مشاهدة" : "View"}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedSkills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={isRTL ? skill.title : skill.titleEn}
                        className="w-full h-full object-cover"
                      />
                      {skill.featured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500/90">
                          ⭐ {isRTL ? "مميز" : "Featured"}
                        </Badge>
                      )}
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{skill.categoryLabel}</Badge>
                            <Badge className="bg-primary/10 text-primary">{skill.levelLabel}</Badge>
                            {skill.verified && (
                              <div className="flex items-center gap-1 text-primary">
                                <Award className="w-4 h-4" />
                                <span className="text-xs">{isRTL ? "موثق" : "Verified"}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{isRTL ? skill.title : skill.titleEn}</h3>
                          <p className="text-muted-foreground line-clamp-2">
                            {isRTL ? skill.description : skill.descriptionEn}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="p-2">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={skill.avatar || "/placeholder.svg"} alt={skill.instructor} />
                            <AvatarFallback>
                              {(isRTL ? skill.instructor : skill.instructorEn)
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{isRTL ? skill.instructor : skill.instructorEn}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{isRTL ? skill.location : skill.locationEn}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{skill.rating}</span>
                          <span className="text-sm text-muted-foreground">({skill.reviews})</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{skill.students}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{isRTL ? skill.duration : skill.durationEn}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="font-bold text-primary">
                            {skill.points} {isRTL ? "نقطة" : "points"}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {skill.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {sortedSkills.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              {isRTL ? "تحميل المزيد" : "Load More"}
            </Button>
          </div>
        )}

        {/* No Results */}
        {sortedSkills.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{isRTL ? "لم يتم العثور على مهارات" : "No Skills Found"}</h3>
            <p className="text-muted-foreground mb-4">
              {isRTL ? "جرب تغيير معايير البحث أو المرشحات" : "Try changing your search criteria or filters"}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedLevel("all")
              }}
            >
              {isRTL ? "مسح المرشحات" : "Clear Filters"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
