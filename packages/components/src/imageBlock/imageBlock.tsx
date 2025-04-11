import React from 'react'
import type { ImageFragment } from '@mono/data'
import { isOfTypeCloudinaryAsset } from '@mono/data'
import Image from 'next/image'
import { formatCloudinaryImage } from '@mono/data'

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
    <Image
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
