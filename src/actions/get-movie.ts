import { env } from '@/env'
import { movieSchema } from '@/schemas/movie'

export async function getMovie(imdbID: string) {
  const res = await fetch(`${env.API_URL}?i=${imdbID}&apikey=${env.API_KEY}`)
  const data = await res.json()

  if (data.Response === 'False') {
    return {
      movie: null,
    }
  }

  const parsedData = movieSchema.safeParse(data)

  if (!parsedData.success) {
    console.error('parsed', parsedData.error)
    console.error('data', data)
    throw new Error('Failed to parse movie')
  }

  return { movie: parsedData.data }
}
