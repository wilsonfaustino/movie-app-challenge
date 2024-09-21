import './globals.css'

import type { Metadata } from 'next'

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
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
