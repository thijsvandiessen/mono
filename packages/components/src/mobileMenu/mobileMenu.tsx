'use client'

import { useEffect, useState } from 'react'
import { Cross, Hamburger } from '../icons/index.js'
import { MobileMenuItems } from '../mobileMenuItems/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useDimensions, useHrefClick } from '@mono/hooks'
import type { Navigation } from '@mono/data'

export const MobileMenu = ({
  escapedMenuString,
}: {
  escapedMenuString: string
}) => {
  const general = JSON.parse(escapedMenuString) as Navigation
  const [open, setOpen] = useState(false)
  useHrefClick(() => setOpen(false))
  const { width } = useDimensions()

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (width < 768) {
      globalThis.document.body.classList.toggle('noscroll', open)
    } else {
      globalThis.document.body.classList.remove('noscroll')
    }
  }, [open, width])

  return (
    <div className={classNames(styles.root)}>
      <button
        className={classNames(styles.menuButton)}
        type="button"
        onClick={handleClick}
        aria-label="Menu"
      >
        <Hamburger className={classNames(styles.menuIcon)} />
      </button>
      {open && (
        <div className={classNames(styles.overlay)}>
          <div className={classNames(styles.heading)}>
            <button
              className={classNames(styles.menuButton)}
              type="button"
              onClick={handleClick}
              aria-label="Sluit menu"
            >
              <Cross className={classNames(styles.menuIcon)} />
            </button>
          </div>
          <MobileMenuItems general={general} />
        </div>
      )}
    </div>
  )
}
