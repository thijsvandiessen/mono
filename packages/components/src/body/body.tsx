import './global.scss'
import React, { type ReactElement } from 'react'
import { DefaultLayout } from '../defaultLayout'

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
