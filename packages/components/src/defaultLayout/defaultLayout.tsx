import type { Navigation as NavigationData, SiteMetadata } from '@mono/data'
import React, { type ReactNode } from 'react'
import { Footer } from '../footer/index.js'
import { Navigation } from '../navigation/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: ReactNode
  data: NavigationData
  metadata: SiteMetadata
}

export const DefaultLayout = ({ children, data, metadata }: Props) => (
  <div className={classNames(styles.main)}>
    <Navigation data={data} />
    <main>{children}</main>
    <Footer metadata={metadata} data={data} />
  </div>
)
