import classNames from 'classnames'
import { getGeneralInfo, getSiteMetadata } from '@mono/data'
import { slugFormatter } from '@mono/utils'
import styles from './styles.module.scss'

export const Footer = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data?.general) return null

  return (
    <footer className={classNames(styles.root)}>
      <div className={classNames(styles.content, 'content-layout')}>
        <div>
          <h2 className={classNames(styles.title)}>{metadata?.title}</h2>
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Navigatie</h3>
          <ul className={classNames(styles.list)}>
            {data.general.menu.map((item) => {
              if ('link' in item && item?.link?.slug && item.label) {
                return (
                  <li key={item.id}>
                    <a
                      className={classNames(styles.link)}
                      href={slugFormatter({ slug: item?.link?.slug })}
                    >
                      {item.label}
                    </a>
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
                <a
                  className={classNames(styles.link)}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
