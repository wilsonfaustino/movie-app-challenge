import { env } from '@/env'
import { searchMovieSchema, searchMovieWithRatingSchema } from '@/schemas/movie'

export async function getMovies(search: string) {
  if (!search) {
    return {
      movies: [],
      totalResults: 0,
    }
  }

  const res = await fetch(`${env.API_URL}?apikey=${env.API_KEY}&s=${search}`)
  const data = await res.json()

  if (data.Response === 'False') {
    return {
      movies: [],
      totalResults: 0,
    }
  }

  const parsedData = searchMovieSchema.array().safeParse(data.Search)

  if (!parsedData.success) {
    console.error('parsed', parsedData.error)
    console.error('data', data)
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

  return {
    movies: moviesWithRatings,
    totalResults: data.totalResults,
  }
}
