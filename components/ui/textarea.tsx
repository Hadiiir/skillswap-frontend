"use client"

import * as React from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="w-full border rounded-md px-3 py-2"
      {...props}
    />
  )
}
