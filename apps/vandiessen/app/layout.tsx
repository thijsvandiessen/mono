import './globals.css'
import { Lato } from 'next/font/google'
import type { Metadata } from 'next'
import { type ReactNode } from 'react'

const font = Lato({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "I'm Thijs van Diessen, a creative software engineer",
  description:
    'I like to design and develop awesome user experiences and am specialized in creating scalable solutions!',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en-US">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <body className={font.className}>{children}</body>
    </html>
  )
}
