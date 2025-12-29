import './global.scss'
import type { NavigationData, SiteMetadata } from '@mono/data'
import React, { type ReactNode } from 'react'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactNode
  navigationData: NavigationData
  metadata: SiteMetadata
}

export const Body = ({ children, navigationData, metadata }: Props) => (
  <body>
    <DefaultLayout navigationData={navigationData} metadata={metadata}>
      {children}
    </DefaultLayout>
  </body>
)
