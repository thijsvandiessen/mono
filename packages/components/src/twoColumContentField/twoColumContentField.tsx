import { ContentField } from '../contentField/index.js'
import type { TwoColumFragment } from '@mono/data'
import classNames from 'classnames'
import { isCdaStructuredTextValue } from 'datocms-structured-text-utils'

import styles from './styles.module.scss'

interface Props {
  item?: TwoColumFragment
}

export const TwoColumContentField = ({ item }: Props) => {
  if (!item) return

  return (
    <div className={classNames(styles.root)} key={item.id}>
      {isCdaStructuredTextValue(item.leftContent) && (
        <div className={styles.content}>
          <ContentField data={item.leftContent} />
        </div>
      )}

      {isCdaStructuredTextValue(item.rightContent) && (
        <div className={styles.content}>
          <ContentField data={item.rightContent} />
        </div>
      )}
    </div>
  )
}
