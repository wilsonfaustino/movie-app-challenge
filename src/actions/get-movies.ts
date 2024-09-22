import { env } from '@/env'
import { searchMovieSchema, searchMovieWithRatingSchema } from '@/schemas/movie'

export async function getMovies(search: string) {
  const res = await fetch(`${env.API_URL}?apikey=${env.API_KEY}&s=${search}`)
  const data = await res.json()

  const parsedData = searchMovieSchema.array().safeParse(data.Search)

  if (!parsedData.success) {
    throw new Error('Failed to parse movies')
  }

  const moviesWithRatings = await Promise.all(
    parsedData.data.map(async (movie) => {
      const res = await fetch(`${env.API_URL}?apikey=${env.API_KEY}&i=${movie.imdbID}`)
      const data = await res.json()

      const parsedData = searchMovieWithRatingSchema.safeParse(data)

      if (!parsedData.success) {
        throw new Error('Failed to parse movie')
      }

      return {
        ...movie,
        imdbRating: data.imdbRating,
      }
    }),
  )

  console.log(moviesWithRatings)

  return {
    movies: moviesWithRatings,
    totalResults: data.totalResults,
  }
}
