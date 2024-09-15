import Link from 'next/link'
import classNames from 'classnames'
import { getGeneralInfo } from '@mono/graphql'
import { getSiteMetadata } from '@mono/graphql'
import { slugFormatter } from '@mono/utils'
import styles from './styles.module.scss'

export const Footer = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data?.general) return null

  return (
    <footer className={classNames(styles.root, 'with-background')}>
      <div className={classNames(styles.content, 'content-layout')}>
        <div>
          <h2 className={classNames(styles.title)}>{metadata?.title}</h2>

          {/* <address className={classNames(styles.address)}>
            <p>Nieuwe Achtergracht 170</p>
            <p>1018 WV Amsterdam</p>
          </address> */}

          {/* <ul className={classNames(styles.list, styles.logoList)}>
            {
              metadata?.socials?.map((social) =>
                <li key={social.name}>
                  <Link
                    className={classNames(styles.logoLink)}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </Link>
                </li>)
            }
          </ul> */}
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Navigatie</h3>
          <ul className={classNames(styles.list)}>
            {data.general.menu.map((item) => {
              if ('link' in item && item?.link?.slug && item.label) {
                return (
                  <li key={item.id}>
                    <Link
                      className={classNames(styles.link)}
                      href={slugFormatter({ slug: item?.link?.slug })}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Volg ons</h3>
          <ul className={classNames(styles.list)}>
            {metadata?.socials?.map((social) => (
              <li key={social.name}>
                <Link
                  className={classNames(styles.link)}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
