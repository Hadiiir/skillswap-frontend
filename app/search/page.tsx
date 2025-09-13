"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Zap,
  Users,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  Eye,
  Heart,
  SlidersHorizontal,
  X,
  BookOpen,
  User,
} from "lucide-react"

export default function SearchPage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("skills")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const t = useTranslation(language)
  const isRTL = language === "ar"

  // Filter states
  const [filters, setFilters] = useState({
    category: "all",
    level: "all",
    priceRange: [0, 200],
    rating: 0,
    location: "all",
    availability: "all",
    verified: false,
    featured: false,
    sortBy: "popular",
  })

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

  const locations = [
    { value: "all", label: isRTL ? "جميع المواقع" : "All Locations" },
    { value: "riyadh", label: isRTL ? "الرياض" : "Riyadh" },
    { value: "jeddah", label: isRTL ? "جدة" : "Jeddah" },
    { value: "dammam", label: isRTL ? "الدمام" : "Dammam" },
    { value: "dubai", label: isRTL ? "دبي" : "Dubai" },
    { value: "cairo", label: isRTL ? "القاهرة" : "Cairo" },
    { value: "online", label: isRTL ? "عبر الإنترنت" : "Online" },
  ]

  const sortOptions = [
    { value: "popular", label: isRTL ? "الأكثر شعبية" : "Most Popular" },
    { value: "rating", label: isRTL ? "الأعلى تقييماً" : "Highest Rated" },
    { value: "newest", label: isRTL ? "الأحدث" : "Newest" },
    { value: "price-low", label: isRTL ? "السعر: من الأقل للأعلى" : "Price: Low to High" },
    { value: "price-high", label: isRTL ? "السعر: من الأعلى للأقل" : "Price: High to Low" },
  ]

  // Mock data
  const skills = [
    {
      id: 1,
      title: "تطوير تطبيقات React المتقدمة",
      titleEn: "Advanced React App Development",
      description: "تعلم بناء تطبيقات React حديثة باستخدام أحدث التقنيات",
      descriptionEn: "Learn to build modern React applications using the latest technologies",
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
      featured: true,
      verified: true,
      responseTime: "خلال ساعة",
      responseTimeEn: "Within 1 hour",
    },
    {
      id: 2,
      title: "تصميم الشعارات الاحترافية",
      titleEn: "Professional Logo Design",
      description: "تعلم أساسيات وتقنيات تصميم الشعارات الاحترافية",
      descriptionEn: "Learn the fundamentals and techniques of professional logo design",
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
      featured: false,
      verified: true,
      responseTime: "خلال 30 دقيقة",
      responseTimeEn: "Within 30 minutes",
    },
    // Add more skills...
  ]

  const instructors = [
    {
      id: 1,
      name: "أحمد محمد حسن",
      nameEn: "Ahmed Mohamed Hassan",
      title: "مطور Full Stack",
      titleEn: "Full Stack Developer",
      avatar: "/diverse-user-avatars.png",
      rating: 4.9,
      reviews: 127,
      students: 456,
      skills: 8,
      location: "الرياض",
      locationEn: "Riyadh",
      verified: true,
      responseTime: "خلال ساعة",
      responseTimeEn: "Within 1 hour",
      specialties: ["React", "Node.js", "TypeScript"],
      bio: "مطور ويب متخصص مع خبرة 8 سنوات",
      bioEn: "Specialized web developer with 8 years of experience",
    },
    {
      id: 2,
      name: "سارة أحمد علي",
      nameEn: "Sarah Ahmed Ali",
      title: "مصممة UI/UX",
      titleEn: "UI/UX Designer",
      avatar: "/female-developer.png",
      rating: 4.8,
      reviews: 89,
      students: 234,
      skills: 5,
      location: "جدة",
      locationEn: "Jeddah",
      verified: true,
      responseTime: "خلال 30 دقيقة",
      responseTimeEn: "Within 30 minutes",
      specialties: ["Figma", "Adobe XD", "Prototyping"],
      bio: "مصممة متخصصة في تجربة المستخدم",
      bioEn: "Designer specialized in user experience",
    },
  ]

  // Filter logic
  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructorEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = filters.category === "all" || skill.category === filters.category
    const matchesLevel = filters.level === "all" || skill.level === filters.level
    const matchesPrice = skill.points >= filters.priceRange[0] && skill.points <= filters.priceRange[1]
    const matchesRating = skill.rating >= filters.rating
    const matchesLocation = filters.location === "all" || skill.location.includes(filters.location)
    const matchesVerified = !filters.verified || skill.verified
    const matchesFeatured = !filters.featured || skill.featured

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesPrice &&
      matchesRating &&
      matchesLocation &&
      matchesVerified &&
      matchesFeatured
    )
  })

  const filteredInstructors = instructors.filter((instructor) => {
    const matchesSearch =
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLocation = filters.location === "all" || instructor.location.includes(filters.location)
    const matchesRating = instructor.rating >= filters.rating
    const matchesVerified = !filters.verified || instructor.verified

    return matchesSearch && matchesLocation && matchesRating && matchesVerified
  })

  const clearFilters = () => {
    setFilters({
      category: "all",
      level: "all",
      priceRange: [0, 200],
      rating: 0,
      location: "all",
      availability: "all",
      verified: false,
      featured: false,
      sortBy: "popular",
    })
  }

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "priceRange") return value[0] !== 0 || value[1] !== 200
    if (key === "rating") return value > 0
    if (typeof value === "boolean") return value
    return value !== "all" && value !== "popular"
  }).length

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{isRTL ? "البحث والاستكشاف" : "Search & Discover"}</h1>
          <p className="text-xl text-muted-foreground">
            {isRTL
              ? "ابحث عن المهارات والمدربين المناسبين لك"
              : "Find the perfect skills and instructors for your needs"}
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
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
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="relative bg-transparent"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                {isRTL ? "المرشحات" : "Filters"}
                {activeFiltersCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  {isRTL ? "المرشحات المتقدمة" : "Advanced Filters"}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    {isRTL ? "مسح الكل" : "Clear All"}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{isRTL ? "الفئة" : "Category"}</label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
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
                </div>

                {/* Level Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{isRTL ? "المستوى" : "Level"}</label>
                  <Select
                    value={filters.level}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, level: value }))}
                  >
                    <SelectTrigger>
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
                </div>

                {/* Location Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{isRTL ? "الموقع" : "Location"}</label>
                  <Select
                    value={filters.location}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">{isRTL ? "ترتيب حسب" : "Sort By"}</label>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) => setFilters((prev) => ({ ...prev, sortBy: value }))}
                  >
                    <SelectTrigger>
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
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  {isRTL ? "نطاق النقاط" : "Points Range"}: {filters.priceRange[0]} - {filters.priceRange[1]}
                </label>
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, priceRange: value }))}
                  max={200}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Rating Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  {isRTL ? "التقييم الأدنى" : "Minimum Rating"}: {filters.rating}
                </label>
                <Slider
                  value={[filters.rating]}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, rating: value[0] }))}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id="verified"
                    checked={filters.verified}
                    onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, verified: checked as boolean }))}
                  />
                  <label htmlFor="verified" className="text-sm font-medium">
                    {isRTL ? "مدربين موثقين فقط" : "Verified instructors only"}
                  </label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id="featured"
                    checked={filters.featured}
                    onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, featured: checked as boolean }))}
                  />
                  <label htmlFor="featured" className="text-sm font-medium">
                    {isRTL ? "المهارات المميزة فقط" : "Featured skills only"}
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {isRTL ? "المهارات" : "Skills"} ({filteredSkills.length})
              </TabsTrigger>
              <TabsTrigger value="instructors" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {isRTL ? "المدربين" : "Instructors"} ({filteredInstructors.length})
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
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

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            {filteredSkills.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill) => (
                    <Card key={skill.id} className="hover:shadow-lg transition-all group cursor-pointer">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={skill.image || "/placeholder.svg"}
                          alt={isRTL ? skill.title : skill.titleEn}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-3 right-3 flex gap-2">
                          <Badge className="bg-primary/90">{skill.levelLabel}</Badge>
                          {skill.featured && (
                            <Badge className="bg-yellow-500/90">⭐ {isRTL ? "مميز" : "Featured"}</Badge>
                          )}
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
                        <CardTitle className="text-lg line-clamp-2 mb-2">
                          {isRTL ? skill.title : skill.titleEn}
                        </CardTitle>
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
                            <p className="text-sm font-medium truncate">
                              {isRTL ? skill.instructor : skill.instructorEn}
                            </p>
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
                  {filteredSkills.map((skill) => (
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
              )
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{isRTL ? "لم يتم العثور على مهارات" : "No Skills Found"}</h3>
                <p className="text-muted-foreground mb-4">
                  {isRTL ? "جرب تغيير معايير البحث أو المرشحات" : "Try changing your search criteria or filters"}
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  {isRTL ? "مسح المرشحات" : "Clear Filters"}
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Instructors Tab */}
          <TabsContent value="instructors" className="space-y-6">
            {filteredInstructors.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInstructors.map((instructor) => (
                  <Card key={instructor.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="relative inline-block mb-4">
                          <Avatar className="w-20 h-20 mx-auto">
                            <AvatarImage
                              src={instructor.avatar || "/placeholder.svg"}
                              alt={isRTL ? instructor.name : instructor.nameEn}
                            />
                            <AvatarFallback className="text-lg">
                              {(isRTL ? instructor.name : instructor.nameEn)
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          {instructor.verified && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Award className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold mb-1">{isRTL ? instructor.name : instructor.nameEn}</h3>
                        <p className="text-muted-foreground mb-3">{isRTL ? instructor.title : instructor.titleEn}</p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {isRTL ? instructor.bio : instructor.bioEn}
                        </p>

                        <div className="flex items-center justify-center gap-1 mb-4">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {isRTL ? instructor.location : instructor.locationEn}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="text-center">
                            <div className="font-bold text-lg">{instructor.rating}</div>
                            <div className="text-muted-foreground flex items-center justify-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {isRTL ? "التقييم" : "Rating"}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">{instructor.students}</div>
                            <div className="text-muted-foreground">{isRTL ? "طالب" : "Students"}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">{instructor.skills}</div>
                            <div className="text-muted-foreground">{isRTL ? "مهارة" : "Skills"}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-lg">{instructor.reviews}</div>
                            <div className="text-muted-foreground">{isRTL ? "تقييم" : "Reviews"}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4 justify-center">
                          {instructor.specialties.map((specialty) => (
                            <Badge key={specialty} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>

                        <div className="text-xs text-muted-foreground mb-4">
                          {isRTL ? "يرد خلال" : "Responds within"}{" "}
                          {isRTL ? instructor.responseTime : instructor.responseTimeEn}
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 bg-primary hover:bg-primary/90" size="sm">
                            {isRTL ? "عرض الملف" : "View Profile"}
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {isRTL ? "لم يتم العثور على مدربين" : "No Instructors Found"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {isRTL ? "جرب تغيير معايير البحث أو المرشحات" : "Try changing your search criteria or filters"}
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  {isRTL ? "مسح المرشحات" : "Clear Filters"}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Load More */}
        {((activeTab === "skills" && filteredSkills.length > 0) ||
          (activeTab === "instructors" && filteredInstructors.length > 0)) && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              {isRTL ? "تحميل المزيد" : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
