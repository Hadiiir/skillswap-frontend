"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageToggleProps {
  currentLanguage: "en" | "ar"
  onLanguageChange: (language: "en" | "ar") => void
}

export function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Globe className="h-4 w-4" />
          {currentLanguage === "en" ? "English" : "العربية"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onLanguageChange("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLanguageChange("ar")}>العربية</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
