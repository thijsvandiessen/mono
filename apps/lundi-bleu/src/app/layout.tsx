import React, { type ReactElement } from 'react'
import { Body } from '@mono/components/src/body'

interface Props {
  children: ReactElement
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="nl-NL">
      <Body>{children}</Body>
    </html>
  )
}

export default RootLayout
