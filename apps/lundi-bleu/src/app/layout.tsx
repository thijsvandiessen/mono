import { Body } from '@mono/components/src/body'

import React from 'react'

interface Props {
  children: React.ReactElement
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="nl-NL">
      <Body>{children}</Body>
    </html>
  )
}

export default RootLayout
