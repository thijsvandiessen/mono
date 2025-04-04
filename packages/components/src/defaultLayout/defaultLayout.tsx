import React, { type ReactElement, type FunctionComponent } from 'react'
import { Footer } from '../footer'
import { Navigation } from '../navigation'
import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: ReactElement
}

export const DefaultLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={classNames(styles.main)}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
