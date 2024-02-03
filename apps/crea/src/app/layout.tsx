import '@crea/components/src/styles/global.scss'

import { DefaultLayout } from '@crea/components/src/defaultLayout'
import React from 'react'

interface Props {
  children: React.ReactNode
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
