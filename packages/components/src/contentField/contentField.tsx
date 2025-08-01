import type {
  HeaderFragment,
  TextBlockFragment,
  TwoColumFragment,
} from '@mono/data'
import { StructuredText } from 'react-datocms/structured-text'
import { isStructuredText } from 'datocms-structured-text-utils'
import { renderBlock } from './renderBlock.jsx'
import { renderInlineRecord } from './renderInlineRecord.jsx'
import { renderLinkToRecord } from './renderLinkToRecord.jsx'

import styles from './styles.module.scss'

interface Props {
  data:
    | HeaderFragment['body']
    | TextBlockFragment['content']
    | TwoColumFragment['leftContent']
    | TwoColumFragment['rightContent']
}

export const ContentField = ({ data }: Props) => {
  if (!isStructuredText(data)) return

  return (
    <div className={styles.structuredText}>
      <StructuredText
        renderInlineRecord={renderInlineRecord}
        renderLinkToRecord={renderLinkToRecord}
        renderBlock={renderBlock}
        data={data}
      />
    </div>
  )
}
