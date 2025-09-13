"use client"

import * as React from "react"

export function Checkbox({ checked, onChange }: { checked?: boolean; onChange?: () => void }) {
  return (
    <input
      type="checkbox"
      className="w-4 h-4 border rounded"
      checked={checked}
      onChange={onChange}
    />
  )
}
