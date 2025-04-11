'use client'

import React, { useState } from 'react'
import { useEscapeKey, useOutsideClick } from '@mono/hooks'
import { NavigationSubMenuItem } from '../navigationSubMenuItem'
import type { SubmenuItemFragment } from '@mono/data'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface SubMenuProps {
  label?: string | null
  item: string
}

export const NavigationSubMenu = ({ label, item }: SubMenuProps) => {
  const submenu: SubmenuItemFragment['menu'] = JSON.parse(item)
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
                slug={item?.link?.slug}
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
