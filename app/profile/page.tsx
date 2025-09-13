"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import {
  Star,
  MapPin,
  Calendar,
  Edit,
  MessageCircle,
  Share2,
  Award,
  TrendingUp,
  Users,
  Clock,
  Zap,
  Eye,
  Heart,
  CheckCircle,
} from "lucide-react"

export default function ProfilePage() {
  const [language, setLanguage] = useState<Language>("ar")
  const t = useTranslation(language)
  const isRTL = language === "ar"

  // Mock user data
  const user = {
    id: 1,
    name: "أحمد محمد حسن",
    nameEn: "Ahmed Mohamed Hassan",
    email: "ahmed@example.com",
    avatar: "/diverse-user-avatars.png",
    coverImage: "/placeholder.svg?height=300&width=800",
    bio: "مطور ويب متخصص في React و Node.js مع خبرة 5 سنوات في تطوير التطبيقات الحديثة. أحب تعلم التقنيات الجديدة ومشاركة المعرفة مع الآخرين.",
    bioEn:
      "Web developer specialized in React and Node.js with 5 years of experience in modern app development. I love learning new technologies and sharing knowledge with others.",
    location: "الرياض، السعودية",
    locationEn: "Riyadh, Saudi Arabia",
    joinDate: "2023-01-15",
    rating: 4.9,
    totalReviews: 47,
    totalPoints: 1250,
    completedExchanges: 23,
    responseTime: "خلال ساعة",
    responseTimeEn: "Within 1 hour",
    languages: ["العربية", "English", "Français"],
    verified: true,
    online: true,
  }

  const skills = [
    {
      id: 1,
      title: "تطوير تطبيقات React",
      titleEn: "React App Development",
      category: "برمجة",
      categoryEn: "Programming",
      level: "خبير",
      levelEn: "Expert",
      points: 80,
      rating: 4.9,
      reviews: 15,
      students: 45,
      image: "/react-development-concept.png",
    },
    {
      id: 2,
      title: "تصميم واجهات المستخدم",
      titleEn: "UI/UX Design",
      category: "تصميم",
      categoryEn: "Design",
      level: "متقدم",
      levelEn: "Advanced",
      points: 60,
      rating: 4.8,
      reviews: 12,
      students: 32,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "إدارة المشاريع التقنية",
      titleEn: "Technical Project Management",
      category: "إدارة",
      categoryEn: "Management",
      level: "متوسط",
      levelEn: "Intermediate",
      points: 45,
      rating: 4.7,
      reviews: 8,
      students: 18,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const learningSkills = [
    {
      id: 1,
      title: "تعلم الآلة والذكاء الاصطناعي",
      titleEn: "Machine Learning & AI",
      teacher: "د. سارة أحمد",
      teacherEn: "Dr. Sarah Ahmed",
      progress: 75,
      pointsSpent: 120,
      status: "جاري",
      statusEn: "In Progress",
    },
    {
      id: 2,
      title: "التصوير الفوتوغرافي",
      titleEn: "Photography",
      teacher: "محمد علي",
      teacherEn: "Mohamed Ali",
      progress: 100,
      pointsSpent: 80,
      status: "مكتمل",
      statusEn: "Completed",
    },
  ]

  const reviews = [
    {
      id: 1,
      reviewer: "سارة محمد",
      reviewerEn: "Sarah Mohamed",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2024-01-15",
      skill: "تطوير تطبيقات React",
      skillEn: "React App Development",
      comment: "معلم ممتاز وصبور. شرح المفاهيم بطريقة واضحة ومفهومة. أنصح بشدة!",
      commentEn: "Excellent and patient teacher. Explained concepts clearly and understandably. Highly recommend!",
    },
    {
      id: 2,
      reviewer: "عمر حسن",
      reviewerEn: "Omar Hassan",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2024-01-10",
      skill: "تصميم واجهات المستخدم",
      skillEn: "UI/UX Design",
      comment: "تعلمت الكثير من أحمد. أسلوبه في التعليم رائع ومفيد جداً.",
      commentEn: "I learned a lot from Ahmed. His teaching style is amazing and very helpful.",
    },
  ]

  const achievements = [
    { title: "معلم مميز", titleEn: "Top Teacher", icon: Award, color: "text-yellow-500" },
    { title: "خبير React", titleEn: "React Expert", icon: CheckCircle, color: "text-blue-500" },
    { title: "مساعد المجتمع", titleEn: "Community Helper", icon: Users, color: "text-green-500" },
    { title: "سريع الاستجابة", titleEn: "Quick Responder", icon: Clock, color: "text-purple-500" },
  ]

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-primary/20 to-accent/20">
        <img src={user.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-background">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={isRTL ? user.name : user.nameEn} />
                    <AvatarFallback className="text-2xl">
                      {(isRTL ? user.name : user.nameEn)
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {user.online && (
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                  )}
                  {user.verified && (
                    <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <div className="text-center md:text-right mt-4">
                  <h1 className="text-2xl font-bold mb-1">{isRTL ? user.name : user.nameEn}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{isRTL ? user.location : user.locationEn}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {isRTL ? "انضم في" : "Joined"} {new Date(user.joinDate).toLocaleDateString(isRTL ? "ar" : "en")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {user.languages.map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats and Actions */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.rating}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {isRTL ? "التقييم" : "Rating"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.totalPoints}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Zap className="w-3 h-3" />
                      {isRTL ? "النقاط" : "Points"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.completedExchanges}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {isRTL ? "التبادلات" : "Exchanges"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.totalReviews}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {isRTL ? "التقييمات" : "Reviews"}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-primary hover:bg-primary/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {isRTL ? "إرسال رسالة" : "Send Message"}
                  </Button>
                  <Button variant="outline">
                    <Heart className="w-4 h-4 mr-2" />
                    {isRTL ? "إضافة للمفضلة" : "Add to Favorites"}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    {isRTL ? "مشاركة" : "Share"}
                  </Button>
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    {isRTL ? "تعديل الملف" : "Edit Profile"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">{isRTL ? "نبذة" : "About"}</TabsTrigger>
            <TabsTrigger value="skills">{isRTL ? "مهاراتي" : "My Skills"}</TabsTrigger>
            <TabsTrigger value="learning">{isRTL ? "أتعلم" : "Learning"}</TabsTrigger>
            <TabsTrigger value="reviews">{isRTL ? "التقييمات" : "Reviews"}</TabsTrigger>
            <TabsTrigger value="achievements">{isRTL ? "الإنجازات" : "Achievements"}</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{isRTL ? "نبذة شخصية" : "About Me"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{isRTL ? user.bio : user.bioEn}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {isRTL ? "وقت الاستجابة" : "Response Time"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{isRTL ? user.responseTime : user.responseTimeEn}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {isRTL ? "متوسط وقت الرد على الرسائل" : "Average message response time"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {isRTL ? "الطلاب" : "Students"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">95+</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {isRTL ? "إجمالي الطلاب الذين تم تدريبهم" : "Total students taught"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{isRTL ? "المهارات التي أدرسها" : "Skills I Teach"}</h2>
              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                {isRTL ? "إدارة المهارات" : "Manage Skills"}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card key={skill.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={isRTL ? skill.title : skill.titleEn}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary/90">
                      {isRTL ? skill.level : skill.levelEn}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2">{isRTL ? skill.title : skill.titleEn}</CardTitle>
                    <CardDescription>{isRTL ? skill.category : skill.categoryEn}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
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

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {skill.students} {isRTL ? "طالب" : "students"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{isRTL ? "مشاهدة" : "View"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learning" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{isRTL ? "المهارات التي أتعلمها" : "Skills I'm Learning"}</h2>
            </div>

            <div className="space-y-4">
              {learningSkills.map((skill) => (
                <Card key={skill.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{isRTL ? skill.title : skill.titleEn}</h3>
                        <p className="text-muted-foreground">
                          {isRTL ? "المعلم:" : "Teacher:"} {isRTL ? skill.teacher : skill.teacherEn}
                        </p>
                      </div>
                      <Badge variant={skill.status === "مكتمل" ? "default" : "secondary"}>
                        {isRTL ? skill.status : skill.statusEn}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{isRTL ? "التقدم" : "Progress"}</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>
                          {isRTL ? "النقاط المستخدمة:" : "Points spent:"} {skill.pointsSpent}
                        </span>
                        {skill.status === "مكتمل" && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span>{isRTL ? "مكتمل" : "Completed"}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{isRTL ? "التقييمات والمراجعات" : "Reviews & Feedback"}</h2>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">{user.rating}</span>
                <span className="text-muted-foreground">
                  ({user.totalReviews} {isRTL ? "تقييم" : "reviews"})
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={review.avatar || "/placeholder.svg"}
                          alt={isRTL ? review.reviewer : review.reviewerEn}
                        />
                        <AvatarFallback>
                          {(isRTL ? review.reviewer : review.reviewerEn)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{isRTL ? review.reviewer : review.reviewerEn}</h4>
                            <p className="text-sm text-muted-foreground">{isRTL ? review.skill : review.skillEn}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString(isRTL ? "ar" : "en")}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{isRTL ? review.comment : review.commentEn}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{isRTL ? "الإنجازات والشارات" : "Achievements & Badges"}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 ${achievement.color}`}
                    >
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold mb-2">{isRTL ? achievement.title : achievement.titleEn}</h3>
                    <p className="text-sm text-muted-foreground">{isRTL ? "تم الحصول عليها" : "Earned"}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{isRTL ? "إحصائيات الإنجازات" : "Achievement Stats"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? "شارات حصل عليها" : "Badges Earned"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? "معدل الرضا" : "Satisfaction Rate"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? "تبادل مكتمل" : "Completed Exchanges"}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1250</div>
                    <div className="text-sm text-muted-foreground">{isRTL ? "نقاط مكتسبة" : "Points Earned"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
