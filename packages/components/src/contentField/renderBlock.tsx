import type { Record } from 'datocms-structured-text-utils'
import type { RenderBlockContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import type {
  CallToActionFragment,
  VideoFragment,
} from '@mono/graphql/src/generated/graphql'
import { CallToAction } from '../callToAction'
import { VideoBlock } from '../videoBlock'

import styles from './styles.module.scss'

export const renderBlock = ({
  record,
}: RenderBlockContext<
  | VideoFragment
  | CallToActionFragment
  | Record
>) => {

  if (isOfType<VideoFragment>(record, 'VideoRecord')) {
    if (!record.media?.url) return null
    return (
      <div className={styles.spacing}>
        <VideoBlock record={record} />
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
