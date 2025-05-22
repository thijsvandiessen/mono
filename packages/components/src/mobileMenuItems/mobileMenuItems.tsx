import { type Navigation } from '@mono/data'
import { NavigationItem } from '../navigationItem/index.js'
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export const MobileMenuItems = ({
  general,
}: {
  general: Navigation
}) => {
  return (
    <ul className={styles.root}>
      {general?.menu?.map((item) => {
        if ('slug' in item) {
          return (
            <NavigationItem
              key={item.id}
              slug={item.slug}
              label={item.label}
            />
          )
        }

        if ('items' in item) {
          return (
            <li key={item.id}>
              <span className={classNames(styles.subItem, 'h3')}>
                {item.label}
              </span>
              <ul className={styles.subList}>
                {item?.items?.map((subItem) => {
                  return (
                    <NavigationItem
                      key={subItem.id}
                      slug={subItem.slug}
                      label={subItem.label}
                    />
                  )
                })}
              </ul>
            </li>
          )
        }
        return <NavigationItem key={item.id} slug={'/'} label={'Error'} />
      })}
    </ul>
  )
}
