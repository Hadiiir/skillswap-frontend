"use client"

import * as React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border shadow-sm bg-white">{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b">{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold">{children}</h2>
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500">{children}</p>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>
}
