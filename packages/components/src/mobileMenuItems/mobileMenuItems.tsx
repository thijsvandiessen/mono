import { type GetGeneralInfoQuery } from '@mono/data'
import { NavigationItem } from '../navigationItem/index.js'
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export const MobileMenuItems = ({
  general,
}: {
  general: GetGeneralInfoQuery['general']
}) => {
  return (
    <ul className={styles.root}>
      {general?.menu?.map((item) => {
        if ('link' in item) {
          return (
            <NavigationItem
              key={item.id}
              slug={item?.link?.slug}
              label={item.label}
            />
          )
        }

        if ('menu' in item) {
          return (
            <li key={item.id}>
              <span className={classNames(styles.subItem, 'h3')}>
                {item.label}
              </span>
              <ul className={styles.subList}>
                {item?.menu?.map((subItem) => {
                  return (
                    <NavigationItem
                      key={subItem.id}
                      slug={subItem?.link?.slug}
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
