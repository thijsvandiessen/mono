'use client'

import { useEffect, useState } from 'react'
import { Cross } from '../icons/cross.jsx'
import { Hamburger } from '../icons/hamburger.jsx'
import { MobileMenuItems } from '../mobileMenuItems/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'
import layoutStyles from '../body/styles.module.scss'
import { useDimensions, useHrefClick } from '@mono/hooks'
import type { GetGeneralInfoQuery } from '@mono/data'

export const MobileMenu = ({
  escapedMenuString,
}: {
  escapedMenuString: string
}) => {
  const general = JSON.parse(
    escapedMenuString
  ) as GetGeneralInfoQuery['general']
  const [open, setOpen] = useState(false)
  useHrefClick(() => setOpen(false))
  const { width } = useDimensions()

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (width < 768) {
      document.body.classList.toggle(layoutStyles.noScroll, open)
    } else {
      document.body.classList.remove(layoutStyles.noScroll)
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
