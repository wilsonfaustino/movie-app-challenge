import Image from 'next/image'

import { getMovies } from '@/actions/get-movies'
import { ListComponent } from '@/components/app/list-component'
import { MovieCard } from '@/components/app/movie-card'
import { searchParamsCache } from '@/lib/search-params'
import type { SearchMovieWithRating } from '@/types'

import sadPopcorn from '../../public/sad-popcorn.svg'

export default async function Home({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const { search } = searchParamsCache.parse(searchParams)
  const { movies, totalResults } = await getMovies(search)

  if (!search) {
    return <div className="py-8 text-center">Please enter a search term</div>
  }

  if (totalResults === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div>No results found for &quot;{search}&quot;</div>
        <Image
          alt="Sad popcorn"
          height={300}
          src={sadPopcorn}
          width={300}
        />
      </div>
    )
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Search results for &quot;{search}&quot;</h2>
      <p className="mb-4">Total results: {totalResults}</p>
      <ListComponent<SearchMovieWithRating>
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        data={movies}
        renderItem={(movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
        )}
      />
    </div>
  )
}
