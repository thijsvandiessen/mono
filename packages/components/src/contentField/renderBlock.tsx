import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import type {
  CallToActionFragment,
  DocumentFragment,
  EventBlockFragment,
  ImageFragment,
  VideoFragment,
} from '@crea/graphql/src/generated/graphql'
import { CallToAction } from '../callToAction'
import { DocumentBlock } from '../documentBlock'
import { Event } from '../event'
import { ImageBlock } from '../imageBlock'
import { FutureEvents } from '../futureEvents'
import { VideoBlock } from '../videoBlock'

import styles from './styles.module.scss'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  | EventBlockFragment
  | ImageFragment
  | VideoFragment
  | DocumentFragment
  | CallToActionFragment
  | Record
>) => {
  if (isOfType<EventBlockFragment>(record, 'ConcertListRecord')) {
    return (
      <div className={styles.spacing}>
        {record.pinnedConcerts.map((item, index) => {
          return (
            <Event
              className="content-layout--small"
              key={item.id}
              id={item.id}
              size="large"
              isLast={record.pinnedConcerts.length - 1 === index}
            />
          )
        })}
        {record.futureConcerts && <FutureEvents skip={0} first={3} />}
      </div>
    )
  }

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
