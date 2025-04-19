import type { ConcertLinkFragment, PageLinkFragment } from '@mono/data'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderInlineRecordContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType.js'
import { slugFormatter } from '@mono/utils'

export const renderInlineRecord = ({
  record,
}: RenderInlineRecordContext<
  Record | PageLinkFragment | ConcertLinkFragment
>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return <a href={slugFormatter({ slug: record.slug })}>{record.title}</a>
  }
  if (isOfType<ConcertLinkFragment>(record, 'ConcertRecord')) {
    if (!record.slug) return null
    return (
      <a
        href={slugFormatter({
          slug: record.slug,
          prefix: '/concerten',
        })}
      >
        {record.title}
      </a>
    )
  }
  // TODO: error logging
  return null
}
