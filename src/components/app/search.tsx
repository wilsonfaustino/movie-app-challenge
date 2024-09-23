'use client'

import { Search as SearchIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'

import { Input } from '@/components/ui/input'

export function Search() {
  const [search, setSearch] = useQueryState('search', { defaultValue: '', clearOnDefault: true })
  const pathname = usePathname()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) return

    if (pathname !== '/') {
      router.push(`/?search=${search}`)

      return
    }

    window.location.reload()
  }

  return (
    <form
      className="relative flex-1 sm:ml-auto md:grow-0"
      onSubmit={handleSubmit}
    >
      <SearchIcon className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
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
