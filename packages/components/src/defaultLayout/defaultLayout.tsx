import React from 'react'
import { Footer } from '../footer'
import { Navigation } from '../navigation'
import classNames from 'classnames'
import styles from './styles.module.scss'

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames(styles.main)}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
