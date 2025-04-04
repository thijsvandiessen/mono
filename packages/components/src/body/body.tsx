import './global.scss'

import { DefaultLayout } from '../defaultLayout'
import React, { type ReactElement } from 'react'

interface Props {
  children: ReactElement
}

export const Body = ({ children }: Props) => {
  return (
    <body>
      <DefaultLayout>{children}</DefaultLayout>
    </body>
  )
}
