"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn("px-3 py-2 border rounded-md w-full", className)}
      {...props}
    />
  )
}
