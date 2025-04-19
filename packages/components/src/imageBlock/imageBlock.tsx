import {
  type ImageFragment,
  formatCloudinaryImage,
  isOfTypeCloudinaryAsset,
} from '@mono/data'
import React from 'react'

import styles from './styles.module.scss'

interface Props {
  record: ImageFragment
}

export const ImageBlock = ({ record }: Props) => {
  if (!record.image) return null
  const asset = formatCloudinaryImage(
    isOfTypeCloudinaryAsset(record.image) ? record.image : undefined
  )
  if (!asset?.url) return null
  return (
    <img
      className={styles.image}
      src={asset.url}
      alt={asset.title}
      height={asset.height}
      width={asset.width}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
