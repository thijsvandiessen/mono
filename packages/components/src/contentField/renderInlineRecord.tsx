import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderInlineRecordContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from '@mono/utils'
import type { ConcertLinkFragment, PageLinkFragment } from '@mono/datocms'

export const renderInlineRecord = ({
  record,
}: RenderInlineRecordContext<
  Record | PageLinkFragment | ConcertLinkFragment
>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return (
      <Link href={slugFormatter({ slug: record.slug })}>{record.title}</Link>
    )
  }
  if (isOfType<ConcertLinkFragment>(record, 'ConcertRecord')) {
    if (!record.slug) return null
    return (
      <Link
        href={slugFormatter({
          slug: record.slug,
          prefix: '/concerten',
        })}
      >
        {record.title}
      </Link>
    )
  }
  // TODO: error logging
  return null
}
