import * as React from 'react'

import { cn } from '@/lib/utils'

const Root = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    className={cn('bg-Root rounded-xl border text-foreground shadow', className)}
    ref={ref}
    {...props}
  />
))

Root.displayName = 'Card'

const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      ref={ref}
      {...props}
    />
  ),
)

Header.displayName = 'Header'

const Title = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      className={cn('font-semibold leading-none tracking-tight', className)}
      ref={ref}
      {...props}
    />
  ),
)

Title.displayName = 'Title'

const Description = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      ref={ref}
      {...props}
    />
  ),
)

Description.displayName = 'Description'

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('p-6 pt-0', className)}
      ref={ref}
      {...props}
    />
  ),
)

Content.displayName = 'Content'

const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex items-center p-6 pt-0', className)}
      ref={ref}
      {...props}
    />
  ),
)

Footer.displayName = 'Footer'

const Card = Object.assign(Root, {
  Header,
  Title,
  Description,
  Content,
  Footer,
})

export { Card }
