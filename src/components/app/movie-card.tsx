import Image from 'next/image'

import type { SearchMovieWithRatingSchema } from '@/types'

import { Card } from '../ui/card'

export function MovieCard({ movie }: { movie: SearchMovieWithRatingSchema }) {
  return (
    <Card className="flex gap-2 overflow-hidden">
      <div className="flex-1">
        <Card.Header>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Description>{`Year: ${movie.Year}`}</Card.Description>
        </Card.Header>

        <Card.Footer>{`Rating: ${movie.imdbRating}`}</Card.Footer>
      </div>
      <Image
        alt={movie.Title}
        height={100}
        src={movie.Poster}
        width={100}
      />
    </Card>
  )
}
