import { Suspense } from 'react'

import { MovieDetails } from '@/components/app/movie-details'
import { MovieDetailsSkeleton } from '@/components/app/movie-details-skeleton'
import { Rating } from '@/components/app/rating'

export default async function MoviePage({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={<MovieDetailsSkeleton />}
      key={params.id}
    >
      <MovieDetails id={params.id}>
        <Rating id={params.id} />
      </MovieDetails>
    </Suspense>
  )
}
