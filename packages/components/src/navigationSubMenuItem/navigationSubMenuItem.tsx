import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { slugFormatter } from '@mono/utils/src/slugFormatter'
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
