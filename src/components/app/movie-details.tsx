import Image from 'next/image'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'

import { getMovie } from '@/actions/get-movie'

interface MovieDetailsProps extends PropsWithChildren {
  id: string
}

export async function MovieDetails({ children, id }: MovieDetailsProps) {
  const { movie } = await getMovie(id)

  if (!movie) {
    redirect('/not-found')
  }

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-6 pt-10 sm:flex-row sm:items-start">
      <div className="aspect-poster max-w-96 overflow-hidden rounded-xl">
        <Image
          alt={movie.Title}
          className="h-full w-auto object-cover"
          height={200}
          src={movie.Poster}
          width={200}
        />
      </div>
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-2xl font-bold">{movie.Title}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="font-bold">Year:</span>
            <span>{movie.Year}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Genre:</span>
            <span>{movie.Genre}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Runtime:</span>
            <span>{movie.Runtime}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Director:</span>
            <span>{movie.Director}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Actors:</span>
            <span>{movie.Actors}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Plot:</span>
            <span>{movie.Plot}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Rating:</span>
            <span>{movie.imdbRating}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
