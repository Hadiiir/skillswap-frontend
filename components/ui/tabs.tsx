"use client"

import { useState } from "react"

export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="flex gap-2 border-b">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-3 py-2 ${idx === active ? "border-b-2 border-green-500" : ""}`}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[active].content}</div>
    </div>
  )
}

export const TabsList = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const TabsTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const TabsContent = ({ children }: { children: React.ReactNode }) => <>{children}</>
