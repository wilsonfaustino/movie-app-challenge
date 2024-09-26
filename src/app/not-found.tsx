import Image from 'next/image'
import Link from 'next/link'

import sadPopcorn from '../../public/sad-popcorn.svg'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <h2 className="text-3xl font-semibold">Not Found</h2>
      <p className="text-lg text-muted-foreground">Could not find the movie you are looking for.</p>
      <Image
        alt="Sad popcorn"
        height={300}
        src={sadPopcorn}
        width={300}
      />
      <Link
        className="font-semibold"
        href="/"
      >
        Return Home
      </Link>
    </div>
  )
}
