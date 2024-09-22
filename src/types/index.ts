import type { z } from 'zod'

import type { movieSchema, searchMovieWithRatingSchema } from '@/schemas/movie'

export type SearchMovieWithRating = z.infer<typeof searchMovieWithRatingSchema>

export type Movie = z.infer<typeof movieSchema>
