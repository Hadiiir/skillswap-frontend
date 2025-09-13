"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  Users,
  TrendingUp,
  Zap,
  Save,
  Settings,
  BarChart3,
  MessageCircle,
  Calendar,
} from "lucide-react"

export default function ManageSkillsPage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [activeTab, setActiveTab] = useState("my-skills")
  const [isCreating, setIsCreating] = useState(false)
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const [newSkill, setNewSkill] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    points: "",
    duration: "",
    tags: "",
    prerequisites: "",
  })

  const mySkills = [
    {
      id: 1,
      title: "تطوير تطبيقات React المتقدمة",
      titleEn: "Advanced React App Development",
      category: "البرمجة",
      categoryEn: "Programming",
      level: "متقدم",
      levelEn: "Advanced",
      points: 120,
      rating: 4.9,
      reviews: 47,
      students: 156,
      earnings: 18720,
      status: "active",
      statusLabel: "نشط",
      statusLabelEn: "Active",
      image: "/react-development-concept.png",
      createdAt: "2023-06-15",
      lastBooking: "2024-01-10",
    },
    {
      id: 2,
      title: "أساسيات JavaScript الحديث",
      titleEn: "Modern JavaScript Fundamentals",
      category: "البرمجة",
      categoryEn: "Programming",
      level: "متوسط",
      levelEn: "Intermediate",
      points: 80,
      rating: 4.7,
      reviews: 32,
      students: 89,
      earnings: 7120,
      status: "active",
      statusLabel: "نشط",
      statusLabelEn: "Active",
      image: "/placeholder.svg?height=150&width=200",
      createdAt: "2023-08-20",
      lastBooking: "2024-01-08",
    },
    {
      id: 3,
      title: "تصميم واجهات المستخدم",
      titleEn: "UI/UX Design Basics",
      category: "التصميم",
      categoryEn: "Design",
      level: "مبتدئ",
      levelEn: "Beginner",
      points: 60,
      rating: 4.5,
      reviews: 18,
      students: 45,
      earnings: 2700,
      status: "draft",
      statusLabel: "مسودة",
      statusLabelEn: "Draft",
      image: "/placeholder.svg?height=150&width=200",
      createdAt: "2023-12-01",
      lastBooking: null,
    },
  ]

  const bookingRequests = [
    {
      id: 1,
      student: "سارة محمد",
      studentEn: "Sarah Mohamed",
      avatar: "/diverse-user-avatars.png",
      skill: "تطوير تطبيقات React المتقدمة",
      skillEn: "Advanced React App Development",
      requestedDate: "2024-01-15",
      requestedTime: "14:00",
      points: 120,
      message: "أريد تعلم React Hooks بشكل متقدم",
      messageEn: "I want to learn advanced React Hooks",
      status: "pending",
      statusLabel: "في الانتظار",
      statusLabelEn: "Pending",
    },
    {
      id: 2,
      student: "عمر حسن",
      studentEn: "Omar Hassan",
      avatar: "/diverse-user-avatars.png",
      skill: "أساسيات JavaScript الحديث",
      skillEn: "Modern JavaScript Fundamentals",
      requestedDate: "2024-01-16",
      requestedTime: "16:00",
      points: 80,
      message: "مبتدئ في البرمجة وأريد تعلم الأساسيات",
      messageEn: "Beginner in programming and want to learn the basics",
      status: "pending",
      statusLabel: "في الانتظار",
      statusLabelEn: "Pending",
    },
  ]

  const handleCreateSkill = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating skill:", newSkill)
    setIsCreating(false)
    setNewSkill({
      title: "",
      description: "",
      category: "",
      level: "",
      points: "",
      duration: "",
      tags: "",
      prerequisites: "",
    })
  }

  const handleAcceptBooking = (bookingId: number) => {
    console.log("Accepting booking:", bookingId)
  }

  const handleRejectBooking = (bookingId: number) => {
    console.log("Rejecting booking:", bookingId)
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{isRTL ? "إدارة المهارات" : "Manage Skills"}</h1>
            <p className="text-xl text-muted-foreground">
              {isRTL ? "أضف وأدر مهاراتك وطلبات الحجز" : "Add and manage your skills and booking requests"}
            </p>
          </div>
          <Button onClick={() => setIsCreating(true)} className="bg-primary hover:bg-primary/90" size="lg">
            <Plus className="w-4 h-4 mr-2" />
            {isRTL ? "إضافة مهارة جديدة" : "Add New Skill"}
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{isRTL ? "إجمالي المهارات" : "Total Skills"}</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <Settings className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{isRTL ? "إجمالي الطلاب" : "Total Students"}</p>
                  <p className="text-2xl font-bold">290</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{isRTL ? "النقاط المكتسبة" : "Points Earned"}</p>
                  <p className="text-2xl font-bold">28,540</p>
                </div>
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{isRTL ? "متوسط التقييم" : "Average Rating"}</p>
                  <p className="text-2xl font-bold">4.7</p>
                </div>
                <Star className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-skills">{isRTL ? "مهاراتي" : "My Skills"}</TabsTrigger>
            <TabsTrigger value="bookings">{isRTL ? "طلبات الحجز" : "Booking Requests"}</TabsTrigger>
            <TabsTrigger value="analytics">{isRTL ? "الإحصائيات" : "Analytics"}</TabsTrigger>
          </TabsList>

          {/* My Skills Tab */}
          <TabsContent value="my-skills" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mySkills.map((skill) => (
                <Card key={skill.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={isRTL ? skill.title : skill.titleEn}
                      className="w-full h-48 object-cover"
                    />
                    <Badge
                      className={`absolute top-3 right-3 ${
                        skill.status === "active"
                          ? "bg-green-500/90"
                          : skill.status === "draft"
                            ? "bg-yellow-500/90"
                            : "bg-red-500/90"
                      }`}
                    >
                      {isRTL ? skill.statusLabel : skill.statusLabelEn}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{isRTL ? skill.title : skill.titleEn}</CardTitle>
                    <CardDescription>
                      {isRTL ? skill.category : skill.categoryEn} • {isRTL ? skill.level : skill.levelEn}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
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
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>
                            {skill.students} {isRTL ? "طالب" : "students"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>
                            {skill.earnings} {isRTL ? "نقطة" : "points"}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        <p>
                          {isRTL ? "تم الإنشاء:" : "Created:"}{" "}
                          {new Date(skill.createdAt).toLocaleDateString(isRTL ? "ar" : "en")}
                        </p>
                        {skill.lastBooking && (
                          <p>
                            {isRTL ? "آخر حجز:" : "Last booking:"}{" "}
                            {new Date(skill.lastBooking).toLocaleDateString(isRTL ? "ar" : "en")}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          {isRTL ? "عرض" : "View"}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Edit className="w-4 h-4 mr-2" />
                          {isRTL ? "تعديل" : "Edit"}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive bg-transparent"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Booking Requests Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {isRTL ? "طلبات الحجز الجديدة" : "New Booking Requests"}
                </CardTitle>
                <CardDescription>
                  {isRTL ? "راجع واقبل أو ارفض طلبات الحجز" : "Review and accept or reject booking requests"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {bookingRequests.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={booking.avatar || "/placeholder.svg"}
                            alt={isRTL ? booking.student : booking.studentEn}
                          />
                          <AvatarFallback>
                            {(isRTL ? booking.student : booking.studentEn)
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-lg">{isRTL ? booking.student : booking.studentEn}</h3>
                              <p className="text-muted-foreground">{isRTL ? booking.skill : booking.skillEn}</p>
                            </div>
                            <Badge variant="secondary">{isRTL ? booking.statusLabel : booking.statusLabelEn}</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">{isRTL ? "التاريخ:" : "Date:"}</span>
                              <p className="font-medium">
                                {new Date(booking.requestedDate).toLocaleDateString(isRTL ? "ar" : "en")}
                              </p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">{isRTL ? "الوقت:" : "Time:"}</span>
                              <p className="font-medium">{booking.requestedTime}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">{isRTL ? "النقاط:" : "Points:"}</span>
                              <p className="font-medium text-primary">{booking.points}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">{isRTL ? "الحالة:" : "Status:"}</span>
                              <p className="font-medium">{isRTL ? booking.statusLabel : booking.statusLabelEn}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-muted-foreground text-sm">{isRTL ? "الرسالة:" : "Message:"}</span>
                            <p className="mt-1">{isRTL ? booking.message : booking.messageEn}</p>
                          </div>

                          <div className="flex gap-3">
                            <Button
                              onClick={() => handleAcceptBooking(booking.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              {isRTL ? "قبول" : "Accept"}
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleRejectBooking(booking.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              {isRTL ? "رفض" : "Reject"}
                            </Button>
                            <Button variant="outline">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              {isRTL ? "إرسال رسالة" : "Send Message"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {isRTL ? "الأداء الشهري" : "Monthly Performance"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>{isRTL ? "هذا الشهر" : "This Month"}</span>
                      <span className="font-bold">2,450 {isRTL ? "نقطة" : "points"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{isRTL ? "الشهر الماضي" : "Last Month"}</span>
                      <span className="font-bold">1,890 {isRTL ? "نقطة" : "points"}</span>
                    </div>
                    <div className="flex items-center justify-between text-green-600">
                      <span>{isRTL ? "النمو" : "Growth"}</span>
                      <span className="font-bold">+29.6%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {isRTL ? "أفضل المهارات أداءً" : "Top Performing Skills"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mySkills.slice(0, 3).map((skill, index) => (
                      <div key={skill.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm">{isRTL ? skill.title : skill.titleEn}</span>
                        </div>
                        <span className="text-sm font-medium">
                          {skill.earnings} {isRTL ? "نقطة" : "points"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Create Skill Modal */}
        {isCreating && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>{isRTL ? "إضافة مهارة جديدة" : "Add New Skill"}</CardTitle>
                <CardDescription>
                  {isRTL ? "املأ التفاصيل لإضافة مهارة جديدة" : "Fill in the details to add a new skill"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateSkill} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">{isRTL ? "عنوان المهارة" : "Skill Title"}</Label>
                    <Input
                      id="title"
                      value={newSkill.title}
                      onChange={(e) => setNewSkill((prev) => ({ ...prev, title: e.target.value }))}
                      className="text-right"
                      placeholder={isRTL ? "مثال: تطوير تطبيقات React" : "Example: React App Development"}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{isRTL ? "الوصف" : "Description"}</Label>
                    <Textarea
                      id="description"
                      value={newSkill.description}
                      onChange={(e) => setNewSkill((prev) => ({ ...prev, description: e.target.value }))}
                      className="text-right min-h-[100px]"
                      placeholder={
                        isRTL ? "اكتب وصفاً مفصلاً للمهارة..." : "Write a detailed description of the skill..."
                      }
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">{isRTL ? "الفئة" : "Category"}</Label>
                      <Select
                        value={newSkill.category}
                        onValueChange={(value) => setNewSkill((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={isRTL ? "اختر الفئة" : "Select category"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programming">{isRTL ? "البرمجة" : "Programming"}</SelectItem>
                          <SelectItem value="design">{isRTL ? "التصميم" : "Design"}</SelectItem>
                          <SelectItem value="translation">{isRTL ? "الترجمة" : "Translation"}</SelectItem>
                          <SelectItem value="marketing">{isRTL ? "التسويق" : "Marketing"}</SelectItem>
                          <SelectItem value="writing">{isRTL ? "الكتابة" : "Writing"}</SelectItem>
                          <SelectItem value="training">{isRTL ? "التدريب" : "Training"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="level">{isRTL ? "المستوى" : "Level"}</Label>
                      <Select
                        value={newSkill.level}
                        onValueChange={(value) => setNewSkill((prev) => ({ ...prev, level: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={isRTL ? "اختر المستوى" : "Select level"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">{isRTL ? "مبتدئ" : "Beginner"}</SelectItem>
                          <SelectItem value="intermediate">{isRTL ? "متوسط" : "Intermediate"}</SelectItem>
                          <SelectItem value="advanced">{isRTL ? "متقدم" : "Advanced"}</SelectItem>
                          <SelectItem value="expert">{isRTL ? "خبير" : "Expert"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="points">{isRTL ? "النقاط المطلوبة" : "Required Points"}</Label>
                      <Input
                        id="points"
                        type="number"
                        value={newSkill.points}
                        onChange={(e) => setNewSkill((prev) => ({ ...prev, points: e.target.value }))}
                        className="text-right"
                        placeholder="100"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">{isRTL ? "المدة المتوقعة" : "Expected Duration"}</Label>
                      <Input
                        id="duration"
                        value={newSkill.duration}
                        onChange={(e) => setNewSkill((prev) => ({ ...prev, duration: e.target.value }))}
                        className="text-right"
                        placeholder={isRTL ? "8 ساعات" : "8 hours"}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">{isRTL ? "الكلمات المفتاحية" : "Tags"}</Label>
                    <Input
                      id="tags"
                      value={newSkill.tags}
                      onChange={(e) => setNewSkill((prev) => ({ ...prev, tags: e.target.value }))}
                      className="text-right"
                      placeholder={isRTL ? "React, JavaScript, TypeScript" : "React, JavaScript, TypeScript"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prerequisites">{isRTL ? "المتطلبات المسبقة" : "Prerequisites"}</Label>
                    <Textarea
                      id="prerequisites"
                      value={newSkill.prerequisites}
                      onChange={(e) => setNewSkill((prev) => ({ ...prev, prerequisites: e.target.value }))}
                      className="text-right"
                      placeholder={isRTL ? "معرفة أساسية بـ JavaScript..." : "Basic knowledge of JavaScript..."}
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>
                      {isRTL ? "إلغاء" : "Cancel"}
                    </Button>
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      <Save className="w-4 h-4 mr-2" />
                      {isRTL ? "حفظ المهارة" : "Save Skill"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
