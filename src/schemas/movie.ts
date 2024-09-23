import { z } from 'zod'

const ratingSchema = z.object({
  Source: z.string(),
  Value: z.string(),
})

export const movieSchema = z.object({
  Title: z.string(),
  Year: z.string(),
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Writer: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Poster: z.string().transform((poster) => (poster === 'N/A' ? '/placeholder.svg' : poster)),
  Ratings: z.array(ratingSchema),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  DVD: z.string().optional(),
  BoxOffice: z.string().optional(),
  Production: z.string().optional(),
  Website: z.string().optional(),
  Response: z.string(),
})

export const searchMovieSchema = movieSchema.pick({
  Title: true,
  Year: true,
  imdbID: true,
  Type: true,
  Poster: true,
})

const movieRatingSchema = movieSchema.pick({
  imdbRating: true,
})

export const searchMovieWithRatingSchema = searchMovieSchema.merge(movieRatingSchema)
