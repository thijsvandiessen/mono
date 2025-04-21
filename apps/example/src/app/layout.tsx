import React, { type ReactElement } from 'react'
import { Body } from '@mono/components'

interface Props {
  children: ReactElement
}

const RootLayout = ({ children }: Props) => (
  <html lang="nl-NL">
    <Body>{children}</Body>
  </html>
)

export default RootLayout
