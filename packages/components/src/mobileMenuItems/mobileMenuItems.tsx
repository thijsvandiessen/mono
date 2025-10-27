import { NavigationItem } from '../navigationItem/index.js'
import classNames from 'classnames'
import styles from './styles.module.scss'
import type { MobileMenuItemsProps } from './mobileMenuItems.type.js'

export const MobileMenuItems = ({ general }: MobileMenuItemsProps) => (
  <ul className={styles.root}>
    {general?.menu?.map((item) => {
      if ('slug' in item) {
        return (
          <NavigationItem key={item.id} slug={item.slug} label={item.label} />
        )
      }

      if ('items' in item) {
        return (
          <li key={item.id}>
            <span className={classNames(styles.subItem, 'h3')}>
              {item.label}
            </span>
            <ul className={styles.subList}>
              {item?.items?.map((subItem) => (
                <NavigationItem
                  key={subItem.id}
                  slug={subItem.slug}
                  label={subItem.label}
                />
              ))}
            </ul>
          </li>
        )
      }
      return <NavigationItem key={item.id} slug={'/'} label="Error" />
    })}
  </ul>
)
