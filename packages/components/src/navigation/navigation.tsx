import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { NavigationItem } from '../navigationItem'
import { NavigationSubMenu } from '../navigationSubMenu'
import { getGeneralInfo } from '@crea/graphql/src/getters/getGeneralInfo'
import { MobileMenu } from '../mobileMenu'
import { getSiteMetadata } from '@crea/graphql/src/getters/getSiteMetadata'

import styles from './styles.module.scss'
import { CreaOrkestLogo } from '../icons/crea-orkest-logo'

export const Navigation: React.FC = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data?.general) return null

  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <Link href="/" className={classNames(styles.logoLink)}>
          <CreaOrkestLogo className={classNames(styles.logo)} />
          <span className="sr-only">{metadata?.title}: Ga naar home</span>
        </Link>
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
