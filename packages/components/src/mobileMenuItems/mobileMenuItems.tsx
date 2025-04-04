'use client'

import React from 'react'
import { useQuery } from 'urql'
import classNames from 'classnames'
import { GetGeneralInfoDocument } from '@mono/graphql'
import { NavigationItem } from '../navigationItem'

import styles from './styles.module.scss'

export const MobileMenuItems = () => {
  const [result] = useQuery({ query: GetGeneralInfoDocument })

  return (
    <ul className={styles.root}>
      {result?.data?.general?.menu.map((item) => {
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
