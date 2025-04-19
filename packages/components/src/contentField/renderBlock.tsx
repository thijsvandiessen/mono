import type {
  CallToActionFragment,
  DocumentFragment,
  ImageFragment,
  VideoFragment,
} from '@mono/data'
import { CallToAction } from '../callToAction/index.js'
import { DocumentBlock } from '../documentBlock/index.js'
import { ImageBlock } from '../imageBlock/index.js'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { VideoBlock } from '../videoBlock/index.js'
import { isOfType } from './isOfType.js'

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
