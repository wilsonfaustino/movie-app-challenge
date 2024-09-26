import { Suspense } from 'react'

import { getMovies } from '@/actions/get-movies'
import { MoviesList } from '@/components/app/movies-list'
import { MoviesSkeleton } from '@/components/app/movies-skeleton'
import { Pagination } from '@/components/app/pagination'
import { searchParamsCache } from '@/lib/search-params'

export default async function Home({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const { search, page } = searchParamsCache.parse(searchParams)
  const { totalResults } = await getMovies(search)

  if (!search) {
    return <div className="py-8 text-center">Please enter a search term</div>
  }

  return (
    <div>
      <h2 className="my-4 ml-auto text-center text-xl font-semibold text-muted-foreground">
        Search results for &quot;{search}&quot;
      </h2>
      <Suspense
        fallback={<MoviesSkeleton />}
        key={`search-${search}${page ? `-page-${page}` : ''}`}
      >
        <MoviesList
          page={page}
          query={search}
        />
      </Suspense>
      {totalResults > 0 && <Pagination totalResults={totalResults} />}
    </div>
  )
}
