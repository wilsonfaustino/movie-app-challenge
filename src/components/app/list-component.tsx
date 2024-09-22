import type { ComponentProps, ReactNode } from 'react'

interface ListComponentProps<T> extends ComponentProps<'div'> {
  data: T[]
  renderItem: (item: T) => ReactNode
}

export function ListComponent<T>({ data, renderItem, className }: ListComponentProps<T>) {
  return <div className={className}>{data.map((item) => renderItem(item))}</div>
}
