import { env } from '@/env'
import { movieSchema } from '@/schemas/movie'

export async function getMovies(search: string) {
  const res = await fetch(`${env.API_URL}?apikey=${env.API_KEY}&s=${search}`)
  const data = await res.json()

  const parsedData = movieSchema.array().safeParse(data.Search)

  if (!parsedData.success) {
    throw new Error('Failed to parse movies')
  }

  return {
    movies: parsedData.data,
    totalResults: data.totalResults,
  }
}
