"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Navigation } from "@/components/navigation"
import { useTranslation, type Language } from "@/lib/i18n"
import { Camera, Save, X, Plus, MapPin, Globe, Phone, Mail, User, FileText, Settings, Upload } from "lucide-react"

export default function EditProfilePage() {
  const [language, setLanguage] = useState<Language>("ar")
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const [formData, setFormData] = useState({
    firstName: "أحمد",
    lastName: "محمد حسن",
    email: "ahmed@example.com",
    phone: "+966501234567",
    bio: "مطور ويب متخصص في React و Node.js مع خبرة 5 سنوات في تطوير التطبيقات الحديثة. أحب تعلم التقنيات الجديدة ومشاركة المعرفة مع الآخرين.",
    location: "الرياض، السعودية",
    website: "https://ahmed-dev.com",
    linkedin: "https://linkedin.com/in/ahmed-hassan",
    github: "https://github.com/ahmed-hassan",
    twitter: "https://twitter.com/ahmed_dev",
    languages: ["العربية", "English", "Français"],
    timezone: "Asia/Riyadh",
    availability: "weekdays",
    hourlyRate: "50",
  })

  const [newLanguage, setNewLanguage] = useState("")
  const [skills, setSkills] = useState([
    { id: 1, name: "React", level: "خبير" },
    { id: 2, name: "Node.js", level: "متقدم" },
    { id: 3, name: "TypeScript", level: "متقدم" },
    { id: 4, name: "UI/UX Design", level: "متوسط" },
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Profile updated:", formData)
    setIsLoading(false)
  }

  const addLanguage = () => {
    if (newLanguage && !formData.languages.includes(newLanguage)) {
      setFormData((prev) => ({
        ...prev,
        languages: [...prev.languages, newLanguage],
      }))
      setNewLanguage("")
    }
  }

  const removeLanguage = (lang: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l !== lang),
    }))
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      <Navigation language={language} onLanguageChange={setLanguage} isAuthenticated={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{isRTL ? "تعديل الملف الشخصي" : "Edit Profile"}</h1>
              <p className="text-muted-foreground">
                {isRTL ? "قم بتحديث معلوماتك الشخصية ومهاراتك" : "Update your personal information and skills"}
              </p>
            </div>
            <Button variant="outline" asChild>
              <a href="/profile">
                <X className="w-4 h-4 mr-2" />
                {isRTL ? "إلغاء" : "Cancel"}
              </a>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  {isRTL ? "الصورة الشخصية" : "Profile Picture"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/diverse-user-avatars.png" alt="Profile" />
                    <AvatarFallback className="text-lg">أح</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button type="button" variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      {isRTL ? "رفع صورة جديدة" : "Upload New Photo"}
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? "JPG أو PNG، الحد الأقصى 2MB" : "JPG or PNG, max 2MB"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {isRTL ? "المعلومات الأساسية" : "Basic Information"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{isRTL ? "الاسم الأول" : "First Name"}</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      className="text-right"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{isRTL ? "الاسم الأخير" : "Last Name"}</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      className="text-right"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {isRTL ? "البريد الإلكتروني" : "Email"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="text-right"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {isRTL ? "رقم الهاتف" : "Phone Number"}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="text-right"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    {isRTL ? "نبذة شخصية" : "Bio"}
                  </Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                    className="text-right min-h-[100px]"
                    placeholder={isRTL ? "اكتب نبذة عن نفسك ومهاراتك..." : "Write about yourself and your skills..."}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {isRTL ? "الموقع" : "Location"}
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    className="text-right"
                    placeholder={isRTL ? "المدينة، البلد" : "City, Country"}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  {isRTL ? "الروابط الاجتماعية" : "Social Links"}
                </CardTitle>
                <CardDescription>
                  {isRTL ? "أضف روابط حساباتك على المواقع الاجتماعية" : "Add links to your social media profiles"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">{isRTL ? "الموقع الشخصي" : "Website"}</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                    className="text-right"
                    placeholder="https://your-website.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
                      className="text-right"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData((prev) => ({ ...prev, github: e.target.value }))}
                      className="text-right"
                      placeholder="https://github.com/username"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    type="url"
                    value={formData.twitter}
                    onChange={(e) => setFormData((prev) => ({ ...prev, twitter: e.target.value }))}
                    className="text-right"
                    placeholder="https://twitter.com/username"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>{isRTL ? "اللغات" : "Languages"}</CardTitle>
                <CardDescription>{isRTL ? "أضف اللغات التي تتحدث بها" : "Add languages you speak"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {formData.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="flex items-center gap-2">
                      {lang}
                      <button type="button" onClick={() => removeLanguage(lang)} className="hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                    placeholder={isRTL ? "أضف لغة جديدة" : "Add new language"}
                    className="text-right"
                  />
                  <Button type="button" onClick={addLanguage} variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  {isRTL ? "إعدادات التوفر" : "Availability Settings"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">{isRTL ? "المنطقة الزمنية" : "Timezone"}</Label>
                    <Select
                      value={formData.timezone}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, timezone: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Riyadh">(GMT+3) الرياض</SelectItem>
                        <SelectItem value="Asia/Dubai">(GMT+4) دبي</SelectItem>
                        <SelectItem value="Africa/Cairo">(GMT+2) القاهرة</SelectItem>
                        <SelectItem value="Europe/London">(GMT+0) لندن</SelectItem>
                        <SelectItem value="America/New_York">(GMT-5) نيويورك</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">{isRTL ? "أوقات التوفر" : "Availability"}</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">{isRTL ? "أيام الأسبوع" : "Weekdays"}</SelectItem>
                        <SelectItem value="weekends">{isRTL ? "عطلة نهاية الأسبوع" : "Weekends"}</SelectItem>
                        <SelectItem value="anytime">{isRTL ? "في أي وقت" : "Anytime"}</SelectItem>
                        <SelectItem value="custom">{isRTL ? "مخصص" : "Custom"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">{isRTL ? "السعر بالساعة (بالنقاط)" : "Hourly Rate (in Points)"}</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, hourlyRate: e.target.value }))}
                    className="text-right"
                    placeholder="50"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" asChild>
                <a href="/profile">{isRTL ? "إلغاء" : "Cancel"}</a>
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {isRTL ? "جاري الحفظ..." : "Saving..."}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    {isRTL ? "حفظ التغييرات" : "Save Changes"}
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
