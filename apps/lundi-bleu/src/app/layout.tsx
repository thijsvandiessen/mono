import '@mono/components/src/styles/global.scss'

import { DefaultLayout } from '@mono/components/src/defaultLayout'
import React from 'react'

interface Props {
  children: React.ReactElement
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="nl-NL">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

export default RootLayout
