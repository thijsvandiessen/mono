import './global.scss'

import { DefaultLayout } from '../defaultLayout'
import React from 'react'

interface Props {
  children: React.ReactElement
}

export const Body = ({ children }: Props) => {
  return (
    <body>
      <DefaultLayout>{children}</DefaultLayout>
    </body>
  )
}
