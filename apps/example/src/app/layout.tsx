import React, { type ReactNode } from 'react'
import { Body } from '@mono/components'

interface Props {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="nl-NL">
    <Body>{children}</Body>
  </html>
)

export default RootLayout
