import './global.scss'
import type { NavigationData, SiteMetadata } from '@mono/data'
import React, { type ReactNode } from 'react'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactNode
  navigationData: NavigationData
  metadata: SiteMetadata
}

export const Body = async ({ children, navigationData, metadata }: Props) => {
  return (
    <body>
      <DefaultLayout navigationData={navigationData} metadata={metadata}>
        {children}
      </DefaultLayout>
    </body>
  )
}
