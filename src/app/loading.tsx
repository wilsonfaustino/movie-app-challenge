import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      <Loader2 className="size-8 animate-spin" />
      <p>Loading...</p>
    </div>
  )
}
