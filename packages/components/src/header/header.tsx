import React from 'react'
import type { ElementType } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { type HeaderFragment } from '@crea/graphql/src/generated/graphql'
import { formatCloudinaryImage } from '@crea/graphql/src/formatters/formatCloudinaryImage'
import { isOfTypeCloudinaryAsset } from '@crea/graphql/src/types/image'
import { ContentField } from '../contentField'
import { isEmptyDocument } from 'datocms-structured-text-utils'
import styles from './styles.module.scss'

interface Props {
  className?: string
  tag?: ElementType
  title?: string
  body?: HeaderFragment['body']
  cover?: HeaderFragment['cover']
}

export const Header = ({
  title,
  className,
  tag = 'header',
  body,
  cover,
}: Props) => {
  const HeaderTag = tag

  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(cover?.asset) ? cover?.asset : undefined
  )

  return (
    <HeaderTag
      className={classNames(className, styles.header, 'with-background', {
        [`${styles.withImage}`]: asset?.url,
        [`${styles.withBody}`]: !isEmptyDocument(body),
      })}
    >
      <div className={classNames(styles.headerContent, 'content-layout')}>
        {title && (
          <h1
            className={classNames({
              'sr-only': body || (!body && asset?.url),
            })}
          >
            {title}
          </h1>
        )}
        <ContentField data={body} />
      </div>
      {asset?.url && (
        <div className={classNames(styles.headerImageWrapper)}>
          <Image
            className={classNames(styles.headerImage)}
            alt={cover?.title || asset.title || ''}
            src={asset.url}
            width={asset.width || 100}
            height={asset.height || 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
