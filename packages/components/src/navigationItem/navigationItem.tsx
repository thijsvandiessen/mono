import React from 'react'
import classNames from 'classnames'
import { slugFormatter } from '@mono/utils'
import styles from './styles.module.scss'
import { Link } from '@mono/next-js'

export interface NavigationItemProps {
  slug?: string
  label?: string
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
