"use client"

export function Select({ children }: { children: React.ReactNode }) {
  return <select className="border px-3 py-2 rounded w-full">{children}</select>
}

export function SelectTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectValue() {
  return <option>Select...</option>
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>
}
