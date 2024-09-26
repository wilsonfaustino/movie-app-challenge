import { Skeleton } from '../ui/skeleton'
import { ListComponent } from './list-component'

const MOCK_DATA = Array.from({ length: 10 }, (_, index) => index)

export function MoviesSkeleton() {
  return (
    <ListComponent
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      data={MOCK_DATA}
      renderItem={(item) => (
        <Skeleton
          className="h-36 w-full rounded-xl border border-muted-foreground"
          key={item}
        />
      )}
    />
  )
}
