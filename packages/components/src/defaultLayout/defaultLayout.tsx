import React, { type ReactElement } from 'react'
import { Footer } from '../footer/index.js'
import { Navigation } from '../navigation/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
  children: ReactElement
}

export const DefaultLayout = ({ children }: Props) => (
  <div className={classNames(styles.main)}>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </div>
)
