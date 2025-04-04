import { Body } from '@mono/components/src/body'
import React, { type ReactElement } from 'react'

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
