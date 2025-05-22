import { MobileMenu } from '../mobileMenu/index.js'
import { NavigationItem } from '../navigationItem/index.js'
import { NavigationSubMenu } from '../navigationSubMenu/index.js'
import React from 'react'
import classNames from 'classnames'
import { getGeneralInfo } from '@mono/data'
import styles from './styles.module.scss'

export const Navigation = async () => {
  const { data } = await getGeneralInfo()
  if (!data) return null

  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <MobileMenu escapedMenuString={JSON.stringify(data)} />
        <ul className={classNames(styles.list)}>
          {data.menu?.map((item) => {
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
                <NavigationSubMenu
                  key={item.id}
                  label={item.label}
                  item={JSON.stringify(item.items)}
                />
              )
            }

            return <NavigationItem key={item.id} slug={'/'} label={'Error'} />
          })}
        </ul>
      </div>
    </nav>
  )
}
