"use client"

export function Avatar({ src }: { src?: string }) {
  return (
    <img
      src={src || "/default-avatar.png"}
      alt="Avatar"
      className="w-10 h-10 rounded-full"
    />
  )
}

export function AvatarImage({ src }: { src: string }) {
  return <img src={src} alt="Avatar" className="w-10 h-10 rounded-full" />
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
      {children}
    </div>
  )
}
