"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      // This would typically check localStorage, cookies, or make an API call
      const token = localStorage.getItem("auth_token")
      const authenticated = !!token

      setIsAuthenticated(authenticated)

      if (requireAuth && !authenticated) {
        router.push("/auth/login")
      } else if (!requireAuth && authenticated) {
        router.push("/dashboard")
      }
    }

    checkAuth()
  }, [requireAuth, router])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <span className="text-muted-foreground">جاري التحقق من الهوية...</span>
        </div>
      </div>
    )
  }

  if (requireAuth && !isAuthenticated) {
    return null
  }

  if (!requireAuth && isAuthenticated) {
    return null
  }

  return <>{children}</>
}
