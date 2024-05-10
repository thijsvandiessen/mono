import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { getGeneralInfo } from '@mono/graphql/src/getters/getGeneralInfo'
import { getSiteMetadata } from '@mono/graphql/src/getters/getSiteMetadata'
import { slugFormatter } from '@mono/utils/src/slugFormatter'
import styles from './styles.module.scss'

export const Footer = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data?.general) return null

  return (
    <footer className={classNames(styles.root, 'with-background')}>
      <div className={classNames(styles.content, 'content-layout')}>
        <div>
          <h2 className={classNames(styles.title)}>
            <span className="sr-only">Footer</span>
            {metadata?.title}
          </h2>

          <address className={classNames(styles.address)}>
            <p>Nieuwe Achtergracht 170</p>
            <p>1018 WV Amsterdam</p>
          </address>

          <ul className={classNames(styles.list, styles.logoList)}>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.crea.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-crea-cultureel-studentencentrum.png"
                  alt="logo CREA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar crea.nl</span>
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.uva.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-uva.png"
                  alt="logo UVA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar uva.nl</span>
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.hva.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-hva.png"
                  alt="logo HVA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar hva.nl</span>
              </Link>
            </li>
          </ul>
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
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://facebook.com/creaorkest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://www.instagram.com/creaorkest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://www.youtube.com/user/creaorkest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
