import { dateIsInThePast, formatDate } from '@mono/utils'
import { ArrowRight } from '../icons/arrow-right.jsx'
import type { Event } from '@mono/data'
import React from 'react'
import classNames from 'classnames'
import { Link, Image } from '@mono/next-js'

import styles from './styles.module.scss'

export interface Props {
  className?: string
  data: Event
  size?: 'small' | 'large'
  isLast?: boolean
  showLink?: boolean
  showImage?: boolean
  showProgram?: boolean
  title?: string
}

export const EventListItem = ({
  className,
  data,
  size = 'small',
  isLast,
  showLink = true,
  showImage = true,
  title,
}: Props) => {
  return (
    <div
      className={classNames(className, styles.root, {
        [`${styles.large}`]: size === 'large',
        [`${styles.isLast}`]: isLast,
        [`${styles.hasTitle}`]: title,
        [`${styles.hasImage}`]: data.image?.url && showImage,
        [`${styles.oneLocation}`]: data.locations?.length === 1,
      })}
    >
      <h2
        className={classNames(styles.title, {
          h3: size === 'small',
          h2: size === 'large',
        })}
      >
        {title && <span className="h2">{title}</span>}
        {showLink && (
          <span>
            <Link href={data.url}>{data.title}</Link>
          </span>
        )}
      </h2>
      <div className={styles.content}>
        {data.locations.length > 0 && (
          <ul className={styles.locations}>
            {data.locations.map((item) => {
              if (!item?.id) return null
              const ticketLink = item.ticketLink
              const concertPast =
                item.startTime && dateIsInThePast(item.startTime)
              const startTime = item.startTime && formatDate(item.startTime)
              const itemTitle = item.title || startTime

              const hash = JSON.stringify(item)
              return (
                <li key={hash} className={styles.location}>
                  <h3
                    className={classNames(styles.locationTitle, {
                      h5: size === 'small',
                      h3: size === 'large',
                    })}
                  >
                    {itemTitle}
                  </h3>
                  {item.title && startTime && (
                    <p className={classNames(styles.locationSubtitle)}>
                      {startTime}
                    </p>
                  )}
                  <p
                    className={classNames(styles.locationLinkContainer, {
                      'text-small': size === 'small' || !ticketLink,
                    })}
                  >
                    {concertPast ? (
                      'Concert voorbij'
                    ) : ticketLink ? (
                      <Link
                        href={ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className={styles.locationLink}>
                          Koop nu kaarten
                          <ArrowRight className={styles.locationLinkIcon} />
                        </span>
                      </Link>
                    ) : (
                      'Link voor de kaartverkoop volgt spoedig'
                    )}
                  </p>
                </li>
              )
            })}
          </ul>
        )}

        {showImage && data.image?.url && (
          <div className={classNames(styles.imageContainer)}>
            <Image
              className={classNames(styles.image)}
              src={data.image.url}
              alt={data.image.description}
              width={data.image.width ?? 100}
              height={data.image.height ?? 100}
            />
          </div>
        )}
      </div>

      {showLink && (
        <Link
          className={classNames(styles.eventLink, {
            'text-small': size === 'small',
          })}
          href={data.url}
        >
          Bekijk concert
          <ArrowRight />
        </Link>
      )}
    </div>
  )
}
