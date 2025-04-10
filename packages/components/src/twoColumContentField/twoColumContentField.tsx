import classNames from 'classnames'
import type { TwoColumFragment } from '@mono/datocms'
import { ContentField } from '../contentField'
import { isStructuredText } from 'datocms-structured-text-utils'

import styles from './styles.module.scss'

interface Props {
  item?: TwoColumFragment
}

export const TwoColumContentField = ({ item }: Props) => {
  if (!item) return

  return (
    <div className={classNames(styles.root)} key={item.id}>
      {isStructuredText(item.leftContent) && (
        <div className={styles.content}>
          <ContentField data={item.leftContent} />
        </div>
      )}

      {isStructuredText(item.rightContent) && (
        <div className={styles.content}>
          <ContentField data={item.rightContent} />
        </div>
      )}
    </div>
  )
}
