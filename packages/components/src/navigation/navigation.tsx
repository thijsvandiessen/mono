import { MobileMenu } from '../mobileMenu/index.js'
import { NavigationItem } from '../navigationItem/index.js'
import { NavigationSubMenu } from '../navigationSubMenu/index.js'
import React from 'react'
import classNames from 'classnames'
import { getGeneralInfo } from '@mono/data'
import styles from './styles.module.scss'
import layoutStyles from '../body/styles.module.scss'

export const Navigation = async () => {
  const { data } = await getGeneralInfo()
  if (!data?.general) return null

  return (
    <nav className={classNames(styles.root, layoutStyles.contentLayout)}>
      <div className={classNames(styles.content)}>
        <MobileMenu escapedMenuString={JSON.stringify(data.general)} />
        <ul className={classNames(styles.list)}>
          {data.general.menu?.map((item) => {
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
