import styles from './styles.module.scss'
import React, { type ReactElement } from 'react'
import { DefaultLayout } from '../defaultLayout/index.js'

interface Props {
  children: ReactElement
}

export const Body = ({ children }: Props) => (
  <body className={styles.body}>
    <DefaultLayout>{children}</DefaultLayout>
  </body>
)
