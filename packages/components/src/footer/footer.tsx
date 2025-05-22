import classNames from 'classnames'
import { getGeneralInfo, getSiteMetadata } from '@mono/data'
import { slugFormatter } from '@mono/utils'
import styles from './styles.module.scss'
import { Link } from '@mono/next-js'

export const Footer = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data) return null

  return (
    <footer className={classNames(styles.root)}>
      <div className={classNames(styles.content, 'content-layout')}>
        <div>
          <h2 className={classNames(styles.title)}>{metadata?.title}</h2>
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Navigatie</h3>
          <ul className={classNames(styles.list)}>
            {data.menu.map((item) => {
              if ('slug' in item && item.slug && item.label) {
                return (
                  <li key={item.id}>
                    <Link
                      className={classNames(styles.link)}
                      href={slugFormatter({ slug: item.slug })}
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
