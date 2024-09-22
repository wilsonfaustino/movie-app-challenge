import './globals.css'

import type { Metadata } from 'next'

import { Header } from '@/components/app/header'

export const metadata: Metadata = {
  title: 'Jaya Movie App',
  description: 'Jaya Movie App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased`}>
        <div className="flex min-h-screen w-full">
          <div className="mx-auto max-w-7xl flex-1 px-4 py-10 xl:px-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
