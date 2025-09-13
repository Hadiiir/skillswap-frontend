"use client"

import * as React from "react"

export function Sheet({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>
}

export function SheetContent({ children }: { children: React.ReactNode }) {
  return <aside className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg">
    {children}
  </aside>
}
