import Image from 'next/image'
import Link from 'next/link'

import type { SearchMovieWithRating } from '@/types'

import { Card } from '../ui/card'

export function MovieCard({ movie }: { movie: SearchMovieWithRating }) {
  return (
    <Card className="flex max-h-36 gap-2 overflow-hidden">
      <div className="flex-1">
        <Card.Header>
          <Card.Title className="text-lg">{movie.Title}</Card.Title>
          <Card.Description>{`Year: ${movie.Year}`}</Card.Description>
        </Card.Header>

        <Card.Footer>{`Rating: ${movie.imdbRating}`}</Card.Footer>
      </div>
      <div className="aspect-poster h-full">
        <Link href={`/${movie.imdbID}`}>
          <Image
            alt={movie.Title}
            className="h-full w-auto object-cover"
            height={100}
            src={movie.Poster}
            width={100}
          />
        </Link>
      </div>
    </Card>
  )
}
