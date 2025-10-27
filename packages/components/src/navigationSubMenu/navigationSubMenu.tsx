'use client'

import React, { useState } from 'react'
import { useEscapeKey, useOutsideClick } from '@mono/hooks'
import type { NavigationItem } from '@mono/data'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { NavigationSubMenuItem } from '../navigationSubMenuItem/index.js'
import type { SubMenuProps } from './navigationSubMenu.types.js'

export const NavigationSubMenu = ({ label, item }: SubMenuProps) => {
  const submenu = JSON.parse(item) as NavigationItem[]
  const [visible, setVisible] = useState(false)
  const ref = useOutsideClick<HTMLLIElement>(() => setVisible(false))
  useEscapeKey(() => setVisible(false))

  const handleClick = () => {
    setVisible(!visible)
  }

  if (!label) return null

  return (
    <li className={classNames(styles.listItem)} ref={ref}>
      <button
        className={classNames(styles.button, 'text-large')}
        disabled={Boolean(submenu?.length === 0)}
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
      {visible && (
        <>
          <ul className={classNames(styles.list)}>
            {submenu?.map((item) => (
              <NavigationSubMenuItem
                key={item.id}
                slug={item.slug}
                label={item.label}
                onClick={handleClick}
              />
            ))}
          </ul>
          <div className={classNames(styles.arrow)} />
        </>
      )}
    </li>
  )
}
