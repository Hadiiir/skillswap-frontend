export type Language = "en" | "ar"

export const translations = {
  en: {
    // Navigation
    home: "Home",
    profile: "Profile",
    dashboard: "Dashboard",
    search: "Search",
    login: "Login",
    register: "Register",
    logout: "Logout",

    // Common
    points: "Points",
    skills: "Skills",
    categories: "Categories",
    rating: "Rating",
    reviews: "Reviews",
    language: "Language",

    // Home page
    heroTitle: "Exchange Skills, Earn Points",
    heroSubtitle: "Connect with talented individuals and trade your skills using our point-based system",
    featuredSkills: "Featured Skills",
    browseCategories: "Browse Categories",

    // Categories
    design: "Design",
    programming: "Programming",
    translation: "Translation",
    training: "Training",
    marketing: "Marketing",
    writing: "Writing",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    profile: "الملف الشخصي",
    dashboard: "لوحة التحكم",
    search: "البحث",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    logout: "تسجيل الخروج",

    // Common
    points: "النقاط",
    skills: "المهارات",
    categories: "الفئات",
    rating: "التقييم",
    reviews: "المراجعات",
    language: "اللغة",

    // Home page
    heroTitle: "تبادل المهارات، اكسب النقاط",
    heroSubtitle: "تواصل مع الأشخاص الموهوبين وتبادل مهاراتك باستخدام نظام النقاط",
    featuredSkills: "المهارات المميزة",
    browseCategories: "تصفح الفئات",

    // Categories
    design: "التصميم",
    programming: "البرمجة",
    translation: "الترجمة",
    training: "التدريب",
    marketing: "التسويق",
    writing: "الكتابة",
  },
}

export function useTranslation(language: Language) {
  return translations[language]
}
