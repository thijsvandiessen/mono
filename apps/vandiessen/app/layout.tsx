import './globals.css'
import React, { type ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "I'm Thijs van Diessen, a creative developer",
  description:
    'I like to design and develop awesome user experiences and specialized in creating faster websites!',

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
