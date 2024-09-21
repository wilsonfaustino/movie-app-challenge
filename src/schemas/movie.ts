import { z } from 'zod'

export const movieSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.enum(['movie', 'series', 'episode']),
  Poster: z.string().url(),
})

export type Movie = z.infer<typeof movieSchema>
