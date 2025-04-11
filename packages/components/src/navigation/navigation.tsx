import React from 'react'
import classNames from 'classnames'
import { NavigationItem } from '../navigationItem'
import { NavigationSubMenu } from '../navigationSubMenu'
import { getGeneralInfo } from '@mono/data'
import { MobileMenu } from '../mobileMenu'
import styles from './styles.module.scss'

export const Navigation = async () => {
  const { data } = await getGeneralInfo()
  if (!data?.general) return null

  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <MobileMenu />
        <ul className={classNames(styles.list)}>
          {data.general.menu.map((item) => {
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
                <NavigationSubMenu
                  key={item.id}
                  label={item.label}
                  item={JSON.stringify(item.menu)}
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
