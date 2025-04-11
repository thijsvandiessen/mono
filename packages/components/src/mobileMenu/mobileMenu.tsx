'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Provider } from 'urql'
import { useDimensions } from '@mono/hooks'
import { client } from '@mono/data'
import { Hamburger } from '../icons/hamburger'
import { Cross } from '../icons/cross'
import { useHrefClick } from '@mono/hooks'
import { MobileMenuItems } from '../mobileMenuItems'

import styles from './styles.module.scss'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  useHrefClick(() => setOpen(false))
  const { width } = useDimensions()

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (width < 768) {
      document.body.classList.toggle('noscroll', open)
    } else {
      document.body.classList.remove('noscroll')
    }
  }, [open, width])

  return (
    <Provider value={client}>
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
            <MobileMenuItems />
          </div>
        )}
      </div>
    </Provider>
  )
}
