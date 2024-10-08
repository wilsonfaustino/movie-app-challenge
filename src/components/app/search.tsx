'use client'

import { Search as SearchIcon } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { Suspense } from 'react'

import { Input } from '@/components/ui/input'

function SearchForm() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '', clearOnDefault: true })
  const [, setPage] = useQueryState('page')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) return

    setPage(null)
    window.location.replace(`/?search=${search}`)
  }

  return (
    <form
      className="relative flex-1 sm:ml-auto md:grow-0"
      onSubmit={handleSubmit}
    >
      <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
      <Input
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        type="search"
        value={search ?? ''}
      />
    </form>
  )
}

export function Search() {
  return (
    <Suspense>
      <SearchForm />
    </Suspense>
  )
}
