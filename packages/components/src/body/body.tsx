import './global.scss'
import React, { type ReactNode } from 'react'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactNode
}

export const Body = ({ children }: Props) => (
  <body>
    <DefaultLayout>{children}</DefaultLayout>
  </body>
)
