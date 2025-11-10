import { Link } from '@mono/next-js'
import React from 'react'
import classNames from 'classnames'
import { slugFormatter } from '@mono/utils'
import styles from './styles.module.scss'

export interface NavigationSubMenuItemProps {
  slug?: string | null
  label?: string | null
  onClick: () => void
}

export const NavigationSubMenuItem = ({
  slug,
  label,
  onClick,
}: NavigationSubMenuItemProps) => {
  if (!slug)
    return <li className={classNames(styles.navItem)}>No link specified</li>
  if (!label)
    return <li className={classNames(styles.navItem)}>No label specified</li>

  return (
    <li className={classNames(styles.navItem)}>
      <Link
        className={classNames(styles.link, 'text-large')}
        href={slugFormatter({ slug })}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  )
}
