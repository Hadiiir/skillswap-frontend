"use client"

export function Slider({ value, onChange }: { value: number; onChange: (val: number) => void }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
    />
  )
}
