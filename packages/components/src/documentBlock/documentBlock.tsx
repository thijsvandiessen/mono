import React from 'react'
import classNames from 'classnames'
import { formatCloudinaryDocument } from '@mono/graphql'
import { isOfTypeCloudinaryAsset } from '@mono/graphql'
import { Button } from '../button'
import { ArrowDown } from '../icons/arrow-down'
import { formatBytes } from '@mono/utils'

import styles from './styles.module.scss'
import { type DocumentFragment } from 'packages/graphql/src/generated/graphql'

interface Props {
  record: DocumentFragment
}

export const DocumentBlock = ({ record }: Props) => {
  if (!record) return null
  const asset = formatCloudinaryDocument(
    isOfTypeCloudinaryAsset(record.document) ? record.document : undefined
  )
  if (!asset?.url) return null
  return (
    <p className={styles.root}>
      <span className={classNames(styles.title, 'h4')}>
        document
        {/* TODO: the name of the document */}
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
