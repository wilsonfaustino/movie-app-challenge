import { Skeleton } from '../ui/skeleton'

export function MovieDetailsSkeleton() {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-6 pt-10 sm:flex-row sm:items-start">
      <Skeleton className="aspect-poster h-80 w-60 rounded-xl border border-zinc-800" />
      <div className="flex w-full flex-col gap-4">
        <Skeleton className="h-6 w-10/12 border border-zinc-800" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
          <Skeleton className="h-4 w-1/2 border border-zinc-800" />
        </div>
      </div>
    </div>
  )
}
