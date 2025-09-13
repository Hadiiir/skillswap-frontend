"use client"

export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded h-2">
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
