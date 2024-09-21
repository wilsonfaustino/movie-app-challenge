import { getMovies } from '@/actions/get-movies'

export default async function Home() {
  const { movies, totalResults } = await getMovies('batman')

  return (
    <div className="min-h-screen w-full">
      <h1>
        Showing {movies.length} of {totalResults} results
      </h1>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </div>
  )
}
