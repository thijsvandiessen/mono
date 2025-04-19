import './global.scss'
import React, { type ReactElement } from 'react'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactElement
}

export const Body = ({ children }: Props) => (
  <body>
    <DefaultLayout>{children}</DefaultLayout>
  </body>
)
