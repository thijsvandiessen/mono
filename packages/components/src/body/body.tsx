import './global.scss'
import React, { type ReactNode } from 'react'
import { getGeneralInfo, getSiteMetadata } from '@mono/data'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactNode
}

export const Body = async ({ children }: Props) => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()

  if (!data) return null

  return (
    <body>
      <DefaultLayout data={data} metadata={metadata}>
        {children}
      </DefaultLayout>
    </body>
  )
}
