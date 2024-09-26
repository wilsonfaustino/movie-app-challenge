'use client'

import { useQueryState } from 'nuqs'

import { Pagination as PaginationUI } from '../ui/pagination'

const SIBLINGS_COUNT = 1
const RECORDS_PER_PAGE = 10

function* range(min: number, max: number) {
  for (let x = min; x < max; x++) {
    yield x + 1
  }
}

interface PaginationProps {
  totalResults: number
}

export function Pagination({ totalResults }: PaginationProps) {
  const [search] = useQueryState('search')
  const [page] = useQueryState('page', { shallow: false })

  const currentPage = page ? parseInt(page) : 1

  const toPaginationItem = (page: number) => {
    return (
      <PaginationUI.Item key={page}>
        <PaginationUI.Link
          href={`/?search=${search}&page=${page}`}
          isActive={currentPage === page}
          prefetch
        >
          {page}
        </PaginationUI.Link>
      </PaginationUI.Item>
    )
  }

  const lastPage = Math.ceil(totalResults / RECORDS_PER_PAGE)
  const lowestPage = Math.max(1, currentPage - SIBLINGS_COUNT - 1)
  const highestPage = Math.min(currentPage + SIBLINGS_COUNT, lastPage)
  const pages = Array.from(range(lowestPage, highestPage), toPaginationItem)

  const initialDisplayedItem = (currentPage - 1) * RECORDS_PER_PAGE + 1
  const finalDisplayedItem = Math.min(initialDisplayedItem + RECORDS_PER_PAGE - 1, totalResults)

  return (
    <div className="border-top mt-6 flex w-full flex-col items-center justify-center gap-4">
      {totalResults > RECORDS_PER_PAGE && (
        <PaginationUI>
          <PaginationUI.Content>
            {currentPage > 1 && (
              <PaginationUI.Item>
                <PaginationUI.Previous
                  href={`/?search=${search}&page=${currentPage - 1}`}
                  prefetch
                />
              </PaginationUI.Item>
            )}
            <PaginationUI.Item>
              <PaginationUI.Link
                href={`/?search=${search}&page=1`}
                isActive={currentPage === 1}
                prefetch
              >
                1
              </PaginationUI.Link>
            </PaginationUI.Item>
            {currentPage > 2 + SIBLINGS_COUNT && (
              <PaginationUI.Item>
                <PaginationUI.Ellipsis />
              </PaginationUI.Item>
            )}
            {pages}
            {currentPage + 1 + SIBLINGS_COUNT < lastPage && (
              <PaginationUI.Item>
                <PaginationUI.Ellipsis />
              </PaginationUI.Item>
            )}
            {highestPage < lastPage && (
              <PaginationUI.Item>
                <PaginationUI.Link
                  href={`/?search=${search}&page=${lastPage}`}
                  prefetch
                >
                  {lastPage}
                </PaginationUI.Link>
              </PaginationUI.Item>
            )}
            {currentPage < highestPage && (
              <PaginationUI.Item>
                <PaginationUI.Next
                  href={`/?search=${search}&page=${currentPage + 1}`}
                  prefetch
                />
              </PaginationUI.Item>
            )}
          </PaginationUI.Content>
        </PaginationUI>
      )}
      <p className="text-muted-foreground text-sm">
        {`Showing `}
        <span className="font-bold text-white">{initialDisplayedItem}</span>
        {` to `}
        <span className="font-bold text-white">{finalDisplayedItem}</span>
        {` of `}
        <span className="font-bold text-white">{totalResults}</span>
      </p>
    </div>
  )
}
