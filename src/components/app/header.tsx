import Link from 'next/link'

import { Search } from './search'

export function Header() {
  return (
    <div className="flex min-h-10 flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
      <h1 className="text-2xl font-bold">
        <Link href="/">🍿 Movies Database</Link>
      </h1>
      <Search />
    </div>
  )
}
