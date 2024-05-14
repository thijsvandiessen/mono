import React from 'react'
import classNames from 'classnames'
import { formatCloudinaryDocument } from '@mono/graphql/src/formatters/formatCloudinaryDocument'
import { isOfTypeCloudinaryAsset } from '@mono/graphql/src/types/image'
import { Button } from '../button'
import { ArrowDown } from '../icons/arrow-down'
import { formatBytes } from '@mono/utils'

import styles from './styles.module.scss'

interface Props {
  document: DocumentFragment
}

export const DocumentBlock = ({ record }: Props) => {
  if (!record.document?.title) return null
  const asset = formatCloudinaryDocument(
    isOfTypeCloudinaryAsset(record.document?.asset)
      ? record.document?.asset
      : undefined
  )
  if (!asset?.url) return null
  return (
    <p className={styles.root}>
      <span className={classNames(styles.title, 'h4')}>
        {record.document.title}
      </span>
      <span className={styles.download}>
        <Button
          href={asset.url}
          leftIcon={<ArrowDown />}
          suffix={asset.bytes ? `(${formatBytes(asset.bytes, 0)})` : ''}
        >
          Download document
        </Button>
      </span>
    </p>
  )
}
