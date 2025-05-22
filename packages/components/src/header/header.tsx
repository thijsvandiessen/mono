import {
  type HeaderFragment,
  formatCloudinaryImage,
  isOfTypeCloudinaryAsset,
} from '@mono/data'
import { ContentField } from '../contentField/index.js'
import type { ElementType } from 'react'
import React from 'react'
import classNames from 'classnames'
import { isEmptyDocument } from 'datocms-structured-text-utils'
import styles from './styles.module.scss'
import { Image } from '@mono/next-js'
import layoutStyles from '../body/styles.module.scss'

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
    isOfTypeCloudinaryAsset(cover) ? cover : undefined
  )

  return (
    <HeaderTag
      className={classNames(className, styles.header, {
        [`${styles.withImage}`]: asset?.url,
        [`${styles.withBody}`]: !isEmptyDocument(body),
      })}
    >
      <div className={classNames(styles.headerContent, layoutStyles.contentLayout)}>
        {title && (
          <h1
            className={classNames({
              [layoutStyles.srOnly]: body ?? (!body && asset?.url),
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
            alt={asset.title ?? title ?? ''}
            src={asset.url}
            width={asset.width ?? 100}
            height={asset.height ?? 100}
          />
          <div className={classNames(styles.background)} />
        </div>
      )}
    </HeaderTag>
  )
}
