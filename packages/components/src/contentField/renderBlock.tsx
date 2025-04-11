import type {
  CallToActionFragment,
  DocumentFragment,
  ImageFragment,
  VideoFragment,
} from '@mono/data'
import { CallToAction } from '../callToAction'
import { DocumentBlock } from '../documentBlock'
import { ImageBlock } from '../imageBlock'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { VideoBlock } from '../videoBlock'
import { isOfType } from './isOfType'

import styles from './styles.module.scss'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  | ImageFragment
  | VideoFragment
  | DocumentFragment
  | CallToActionFragment
  | Record
>) => {
  if (isOfType<ImageFragment>(record, 'ImageRecord')) {
    return (
      <div className={styles.spacing}>
        <ImageBlock record={record} />
      </div>
    )
  }

  if (isOfType<VideoFragment>(record, 'VideoRecord')) {
    if (!record.media?.url) return null
    return (
      <div className={styles.spacing}>
        <VideoBlock record={record} />
      </div>
    )
  }

  if (isOfType<DocumentFragment>(record, 'DocumentRecord')) {
    return (
      <div className={styles.spacing}>
        <DocumentBlock record={record} />
      </div>
    )
  }

  if (isOfType<CallToActionFragment>(record, 'CallToActionRecord')) {
    return (
      <div className={styles.spacing}>
        <CallToAction record={record} />
      </div>
    )
  }

  return <p>not supported: {record.__typename}</p>
}
