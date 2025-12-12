import { MobileMenu } from '../mobileMenu/index.js'
import type { Navigation as NavigationData } from '@mono/data'
import { NavigationItem } from '../navigationItem/index.js'
import { NavigationSubMenu } from '../navigationSubMenu/index.js'
import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  data: NavigationData
}

export const Navigation = ({ data }: Props) => {
  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <MobileMenu escapedMenuString={JSON.stringify(data)} />
        <ul className={classNames(styles.list)}>
          {data.menu?.map((item) => {
            if ('slug' in item && item.slug) {
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
                <NavigationSubMenu
                  key={item.id}
                  label={item.label}
                  item={JSON.stringify(item.items)}
                />
              )
            }

            return null
          })}
        </ul>
      </div>
    </nav>
  )
}
