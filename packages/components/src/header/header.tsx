import { Image } from '@mono/next-js'
import type { ImageSchema } from '@mono/data'
import React from 'react'
import type { ReactNode } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  className?: string
  tag?: 'header' | 'section'
  title?: string
  body?: ReactNode
  cover?: ImageSchema
}

export const Header = ({
  title,
  className,
  body,
  cover,
  tag = 'header',
}: Props) => {
  const Tag = tag
  return (
    <Tag
      className={classNames(className, styles.header, {
        [`${styles.withImage}`]: cover?.url,
        [`${styles.withBody}`]: body,
      })}
    >
      <div className={classNames(styles.headerContent)}>
        {title && (
          <h1
            className={classNames({
              'sr-only': body ?? (body && cover?.url),
            })}
          >
            {title}
          </h1>
        )}
        {body}
      </div>
      {cover?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={cover.title}
            src={cover.url}
            width={cover.width ?? 100}
            height={cover.height ?? 100}
            loading="eager"
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </Tag>
  )
}
