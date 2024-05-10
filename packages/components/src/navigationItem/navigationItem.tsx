import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { slugFormatter } from '@mono/utils/src/slugFormatter'
import styles from './styles.module.scss'

export interface NavigationItemProps {
  slug?: string | null
  label?: string | null
}

export const NavigationItem = ({ slug, label }: NavigationItemProps) => {
  if (!slug)
    return <li className={classNames(styles.navItem)}>No link specified</li>
  if (!label)
    return <li className={classNames(styles.navItem)}>No label specified</li>

  return (
    <li className={classNames(styles.navItem)}>
      <Link
        className={classNames(styles.link, 'text-large')}
        href={slugFormatter({ slug })}
      >
        {label}
      </Link>
    </li>
  )
}
