"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import {
  Star,
  Zap,
  Users,
  Clock,
  MapPin,
  Calendar,
  MessageCircle,
  Heart,
  Share2,
  Award,
  CheckCircle,
  Play,
  BookOpen,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react"

export default function SkillDetailPage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [isFavorited, setIsFavorited] = useState(false)
  const t = useTranslation(language)
  const isRTL = language === "ar"

  // Mock skill data
  const skill = {
    id: 1,
    title: "تطوير تطبيقات React المتقدمة",
    titleEn: "Advanced React App Development",
    description: "تعلم بناء تطبيقات React حديثة باستخدام أحدث التقنيات والممارسات الحديثة في التطوير",
    descriptionEn:
      "Learn to build modern React applications using the latest technologies and modern development practices",
    longDescription: `في هذه الدورة الشاملة، ستتعلم كيفية بناء تطبيقات React متقدمة من الصفر. سنغطي المفاهيم المتقدمة مثل إدارة الحالة، التوجيه، والتحسين. ستتعلم أيضاً كيفية استخدام TypeScript مع React وأفضل الممارسات في التطوير.

سنبدأ بمراجعة سريعة لأساسيات React، ثم ننتقل إلى المواضيع المتقدمة مثل:
- إدارة الحالة المعقدة باستخدام Redux و Context API
- التوجيه المتقدم مع React Router
- تحسين الأداء والتحميل التدريجي
- اختبار التطبيقات باستخدام Jest و React Testing Library
- نشر التطبيقات على منصات مختلفة

بنهاية الدورة، ستكون قادراً على بناء تطبيقات React احترافية وقابلة للتطوير.`,
    longDescriptionEn: `In this comprehensive course, you'll learn how to build advanced React applications from scratch. We'll cover advanced concepts like state management, routing, and optimization. You'll also learn how to use TypeScript with React and best practices in development.

We'll start with a quick review of React fundamentals, then move on to advanced topics such as:
- Complex state management using Redux and Context API
- Advanced routing with React Router
- Performance optimization and progressive loading
- Testing applications using Jest and React Testing Library
- Deploying applications to different platforms

By the end of the course, you'll be able to build professional and scalable React applications.`,
    instructor: {
      id: 1,
      name: "أحمد محمد حسن",
      nameEn: "Ahmed Mohamed Hassan",
      avatar: "/diverse-user-avatars.png",
      title: "مطور Full Stack",
      titleEn: "Full Stack Developer",
      bio: "مطور ويب متخصص مع خبرة 8 سنوات في React و Node.js",
      bioEn: "Specialized web developer with 8 years of experience in React and Node.js",
      rating: 4.9,
      totalReviews: 127,
      totalStudents: 456,
      responseTime: "خلال ساعة",
      responseTimeEn: "Within 1 hour",
      location: "الرياض، السعودية",
      locationEn: "Riyadh, Saudi Arabia",
      languages: ["العربية", "English"],
      verified: true,
      joinDate: "2020-03-15",
    },
    category: "programming",
    categoryLabel: isRTL ? "البرمجة" : "Programming",
    level: "advanced",
    levelLabel: isRTL ? "متقدم" : "Advanced",
    points: 120,
    originalPoints: 150,
    rating: 4.9,
    reviews: 47,
    students: 156,
    duration: "8 ساعات",
    durationEn: "8 hours",
    sessions: 12,
    image: "/react-development-concept.png",
    tags: ["React", "JavaScript", "TypeScript", "Next.js", "Redux", "Testing"],
    featured: true,
    verified: true,
    lastUpdated: "2024-01-15",
    prerequisites: ["معرفة أساسية بـ JavaScript", "فهم أساسيات HTML و CSS", "خبرة سابقة مع React (أساسيات)"],
    prerequisitesEn: [
      "Basic knowledge of JavaScript",
      "Understanding of HTML and CSS fundamentals",
      "Previous experience with React (basics)",
    ],
    whatYouWillLearn: [
      "بناء تطبيقات React معقدة وقابلة للتطوير",
      "إدارة الحالة المتقدمة باستخدام Redux",
      "تحسين أداء التطبيقات",
      "اختبار التطبيقات بشكل شامل",
      "نشر التطبيقات على الإنتاج",
    ],
    whatYouWillLearnEn: [
      "Build complex and scalable React applications",
      "Advanced state management using Redux",
      "Optimize application performance",
      "Comprehensive application testing",
      "Deploy applications to production",
    ],
    curriculum: [
      {
        title: "مقدمة ومراجعة الأساسيات",
        titleEn: "Introduction and Fundamentals Review",
        duration: "45 دقيقة",
        durationEn: "45 minutes",
        lessons: 3,
      },
      {
        title: "إدارة الحالة المتقدمة",
        titleEn: "Advanced State Management",
        duration: "90 دقيقة",
        durationEn: "90 minutes",
        lessons: 4,
      },
      {
        title: "التوجيه والملاحة",
        titleEn: "Routing and Navigation",
        duration: "60 دقيقة",
        durationEn: "60 minutes",
        lessons: 3,
      },
      {
        title: "تحسين الأداء",
        titleEn: "Performance Optimization",
        duration: "75 دقيقة",
        durationEn: "75 minutes",
        lessons: 3,
      },
      {
        title: "الاختبار والنشر",
        titleEn: "Testing and Deployment",
        duration: "90 دقيقة",
        durationEn: "90 minutes",
        lessons: 4,
      },
    ],
  }

  const reviews = [
    {
      id: 1,
      reviewer: "سارة محمد",
      reviewerEn: "Sarah Mohamed",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2024-01-10",
      comment:
        "دورة ممتازة! أحمد معلم رائع وصبور. تعلمت الكثير من المفاهيم المتقدمة في React. أنصح بها بشدة لكل من يريد تطوير مهاراته في React.",
      commentEn:
        "Excellent course! Ahmed is a wonderful and patient teacher. I learned a lot of advanced React concepts. I highly recommend it to anyone who wants to develop their React skills.",
      helpful: 12,
    },
    {
      id: 2,
      reviewer: "عمر حسن",
      reviewerEn: "Omar Hassan",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2024-01-05",
      comment: "المحتوى شامل ومفصل. الأمثلة العملية مفيدة جداً. أحمد يجيب على جميع الأسئلة بسرعة ووضوح.",
      commentEn:
        "The content is comprehensive and detailed. The practical examples are very useful. Ahmed answers all questions quickly and clearly.",
      helpful: 8,
    },
    {
      id: 3,
      reviewer: "فاطمة علي",
      reviewerEn: "Fatima Ali",
      avatar: "/diverse-user-avatars.png",
      rating: 4,
      date: "2023-12-28",
      comment: "دورة جيدة جداً. ساعدتني في فهم Redux بشكل أفضل. أتمنى لو كان هناك المزيد من الأمثلة العملية.",
      commentEn: "Very good course. It helped me understand Redux better. I wish there were more practical examples.",
      helpful: 5,
    },
  ]

  const relatedSkills = [
    {
      id: 2,
      title: "Node.js للمطورين المتقدمين",
      titleEn: "Node.js for Advanced Developers",
      instructor: "محمد أحمد",
      instructorEn: "Mohamed Ahmed",
      points: 100,
      rating: 4.8,
      students: 89,
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      title: "تصميم واجهات المستخدم",
      titleEn: "UI/UX Design",
      instructor: "ليلى حسن",
      instructorEn: "Layla Hassan",
      points: 80,
      rating: 4.7,
      students: 67,
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="relative">
              <img
                src={skill.image || "/placeholder.svg"}
                alt={isRTL ? skill.title : skill.titleEn}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {skill.featured && <Badge className="bg-yellow-500/90">⭐ {isRTL ? "مميز" : "Featured"}</Badge>}
                <Badge className="bg-primary/90">{skill.levelLabel}</Badge>
              </div>
            </div>

            {/* Title and Basic Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{isRTL ? skill.title : skill.titleEn}</h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    {isRTL ? skill.description : skill.descriptionEn}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {isRTL ? "آخر تحديث:" : "Last updated:"}{" "}
                        {new Date(skill.lastUpdated).toLocaleDateString(isRTL ? "ar" : "en")}
                      </span>
                    </div>
                    <Badge variant="secondary">{skill.categoryLabel}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={isFavorited ? "text-red-500" : ""}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-lg">{skill.rating}</span>
                  <span className="text-muted-foreground">
                    ({skill.reviews} {isRTL ? "تقييم" : "reviews"})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>
                    {skill.students} {isRTL ? "طالب" : "students"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{isRTL ? skill.duration : skill.durationEn}</span>
                </div>
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">{isRTL ? "نظرة عامة" : "Overview"}</TabsTrigger>
                <TabsTrigger value="curriculum">{isRTL ? "المنهج" : "Curriculum"}</TabsTrigger>
                <TabsTrigger value="instructor">{isRTL ? "المدرب" : "Instructor"}</TabsTrigger>
                <TabsTrigger value="reviews">{isRTL ? "التقييمات" : "Reviews"}</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{isRTL ? "وصف المهارة" : "Skill Description"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {isRTL ? skill.longDescription : skill.longDescriptionEn}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      {isRTL ? "ما ستتعلمه" : "What You'll Learn"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(isRTL ? skill.whatYouWillLearn : skill.whatYouWillLearnEn).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {isRTL ? "المتطلبات المسبقة" : "Prerequisites"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(isRTL ? skill.prerequisites : skill.prerequisitesEn).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{isRTL ? "الكلمات المفتاحية" : "Tags"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      {isRTL ? "محتوى الدورة" : "Course Content"}
                    </CardTitle>
                    <CardDescription>
                      {skill.sessions} {isRTL ? "جلسة" : "sessions"} • {isRTL ? skill.duration : skill.durationEn}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skill.curriculum.map((section, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{isRTL ? section.title : section.titleEn}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>
                              {section.lessons} {isRTL ? "درس" : "lessons"}
                            </span>
                            <span>{isRTL ? section.duration : section.durationEn}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Instructor Tab */}
              <TabsContent value="instructor" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={skill.instructor.avatar || "/placeholder.svg"} alt={skill.instructor.name} />
                        <AvatarFallback className="text-2xl">
                          {(isRTL ? skill.instructor.name : skill.instructor.nameEn)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h2 className="text-2xl font-bold">
                            {isRTL ? skill.instructor.name : skill.instructor.nameEn}
                          </h2>
                          {skill.instructor.verified && (
                            <div className="flex items-center gap-1 text-primary">
                              <Award className="w-5 h-5" />
                              <span className="text-sm">{isRTL ? "موثق" : "Verified"}</span>
                            </div>
                          )}
                        </div>
                        <p className="text-lg text-muted-foreground mb-4">
                          {isRTL ? skill.instructor.title : skill.instructor.titleEn}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {isRTL ? skill.instructor.bio : skill.instructor.bioEn}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{skill.instructor.rating}</div>
                            <div className="text-sm text-muted-foreground">{isRTL ? "التقييم" : "Rating"}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{skill.instructor.totalReviews}</div>
                            <div className="text-sm text-muted-foreground">{isRTL ? "تقييم" : "Reviews"}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{skill.instructor.totalStudents}</div>
                            <div className="text-sm text-muted-foreground">{isRTL ? "طالب" : "Students"}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {new Date().getFullYear() - new Date(skill.instructor.joinDate).getFullYear()}
                            </div>
                            <div className="text-sm text-muted-foreground">{isRTL ? "سنوات" : "Years"}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{isRTL ? skill.instructor.location : skill.instructor.locationEn}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>
                              {isRTL ? "يرد خلال" : "Responds within"}{" "}
                              {isRTL ? skill.instructor.responseTime : skill.instructor.responseTimeEn}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {skill.instructor.languages.map((lang) => (
                            <Badge key={lang} variant="secondary">
                              {lang}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button>
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {isRTL ? "إرسال رسالة" : "Send Message"}
                          </Button>
                          <Button variant="outline">
                            <Globe className="w-4 h-4 mr-2" />
                            {isRTL ? "عرض الملف الشخصي" : "View Profile"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{isRTL ? "تقييمات الطلاب" : "Student Reviews"}</span>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-semibold">{skill.rating}</span>
                        <span className="text-muted-foreground">
                          ({skill.reviews} {isRTL ? "تقييم" : "reviews"})
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id}>
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
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < review.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(review.date).toLocaleDateString(isRTL ? "ar" : "en")}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{isRTL ? review.comment : review.commentEn}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="hover:text-foreground">
                                {isRTL ? "مفيد" : "Helpful"} ({review.helpful})
                              </button>
                              <button className="hover:text-foreground">{isRTL ? "رد" : "Reply"}</button>
                            </div>
                          </div>
                        </div>
                        <Separator className="mt-6" />
                      </div>
                    ))}

                    <Button variant="outline" className="w-full bg-transparent">
                      {isRTL ? "عرض جميع التقييمات" : "View All Reviews"}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-3xl font-bold text-primary">{skill.points}</span>
                    <span className="text-lg text-muted-foreground">{isRTL ? "نقطة" : "points"}</span>
                  </div>
                  {skill.originalPoints > skill.points && (
                    <div className="text-sm text-muted-foreground line-through">
                      {skill.originalPoints} {isRTL ? "نقطة" : "points"}
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {isRTL ? "احجز جلسة" : "Book Session"}
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Heart className="w-4 h-4 mr-2" />
                    {isRTL ? "أضف للمفضلة" : "Add to Wishlist"}
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{isRTL ? "المدة:" : "Duration:"}</span>
                    <span>{isRTL ? skill.duration : skill.durationEn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{isRTL ? "الجلسات:" : "Sessions:"}</span>
                    <span>{skill.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{isRTL ? "المستوى:" : "Level:"}</span>
                    <Badge variant="secondary">{skill.levelLabel}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{isRTL ? "اللغة:" : "Language:"}</span>
                    <span>{isRTL ? "العربية" : "Arabic"}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="text-center text-sm text-muted-foreground">
                  <p>{isRTL ? "ضمان استرداد النقاط خلال 7 أيام" : "7-day points refund guarantee"}</p>
                </div>
              </CardContent>
            </Card>

            {/* Related Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {isRTL ? "مهارات ذات صلة" : "Related Skills"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedSkills.map((relatedSkill) => (
                  <div key={relatedSkill.id} className="flex gap-3 p-3 rounded-lg hover:bg-accent cursor-pointer">
                    <img
                      src={relatedSkill.image || "/placeholder.svg"}
                      alt={isRTL ? relatedSkill.title : relatedSkill.titleEn}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {isRTL ? relatedSkill.title : relatedSkill.titleEn}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {isRTL ? relatedSkill.instructor : relatedSkill.instructorEn}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{relatedSkill.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium">
                          <Zap className="w-3 h-3" />
                          <span>{relatedSkill.points}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
