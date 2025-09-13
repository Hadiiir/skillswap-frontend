"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation, type Language } from "@/lib/i18n"
import { Menu, Zap, Home, Search, User, MessageCircle, Settings, LogOut, Bell, Coins } from "lucide-react"

interface NavigationProps {
  language: Language
  onLanguageChange: (lang: Language) => void
  isAuthenticated?: boolean
}

export function Navigation({ language, onLanguageChange, isAuthenticated = false }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslation(language)
  const isRTL = language === "ar"

  const navigationItems = [
    { href: "/", label: t.home, icon: Home },
    { href: "/skills", label: t.skills, icon: Search },
    { href: "/categories", label: t.categories, icon: Zap },
    { href: "/about", label: "حول المنصة", icon: User },
  ]

  const userMenuItems = [
    { href: "/dashboard", label: "لوحة التحكم", icon: Home },
    { href: "/profile", label: "الملف الشخصي", icon: User },
    { href: "/messages", label: "الرسائل", icon: MessageCircle, badge: 3 },
    { href: "/points", label: "النقاط", icon: Coins },
    { href: "/settings", label: "الإعدادات", icon: Settings },
  ]

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">SkillSwap</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    2
                  </Badge>
                </Button>

                {/* Points Display */}
                <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full">
                  <Coins className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">150</span>
                </div>

                {/* User Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side={isRTL ? "left" : "right"} className="w-80">
                    <div className="space-y-6">
                      {/* User Info */}
                      <div className="flex items-center gap-3 pb-4 border-b">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">أحمد محمد</h3>
                          <p className="text-sm text-muted-foreground">ahmed@example.com</p>
                        </div>
                      </div>

                      {/* User Menu Items */}
                      <nav className="space-y-2">
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon className="h-5 w-5" />
                              <span>{item.label}</span>
                            </div>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="h-5 w-5 flex items-center justify-center p-0 text-xs"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </nav>

                      {/* Logout */}
                      <div className="pt-4 border-t">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-destructive hover:text-destructive"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          تسجيل الخروج
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/auth/login">{t.login}</Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/auth/register">{t.register}</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "left" : "right"} className="w-80">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-xl font-bold">SkillSwap</h2>
                  </div>

                  <nav className="space-y-2">
                    {navigationItems.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            isActive
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </Link>
                      )
                    })}
                  </nav>

                  {!isAuthenticated && (
                    <div className="space-y-3 pt-4 border-t">
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                          {t.login}
                        </Link>
                      </Button>
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                          {t.register}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
