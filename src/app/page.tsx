import { getMovies } from '@/actions/get-movies'
import { ListComponent } from '@/components/app/list-component'
import type { Movie } from '@/schemas/movie'

export default async function Home() {
  const { movies, totalResults } = await getMovies('batman')

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Your Movies Database</h1>
        <p className="text-sm text-gray-500">
          Showing {movies.length} of {totalResults} results
        </p>
      </div>
      <ListComponent<Movie>
        data={movies}
        renderItem={(movie) => <div key={movie.imdbID}>{movie.Title}</div>}
      />
    </div>
  )
}
