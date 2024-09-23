import Image from 'next/image'

import { getMovies } from '@/actions/get-movies'
import type { SearchMovieWithRating } from '@/types'

import { ListComponent } from './list-component'
import { MovieCard } from './movie-card'

export async function MoviesList({ query, page }: { query: string; page: string }) {
  const { movies, totalResults } = await getMovies(query, page)

  if (totalResults === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div>No results found for &quot;{query}&quot;</div>
        <Image
          alt="Sad popcorn"
          height={300}
          src={'/sad-popcorn.svg'}
          width={300}
        />
      </div>
    )
  }

  return (
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
  )
}
