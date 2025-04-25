import type { ConcertLinkFragment, PageLinkFragment } from '@mono/data'
import type { Record } from 'datocms-structured-text-utils'
import { type RenderRecordLinkContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType.js'
import { slugFormatter } from '@mono/utils'
import { Link } from '@mono/next-js'

export const renderLinkToRecord = ({
  record,
  children,
}: RenderRecordLinkContext<Record>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return <Link href={slugFormatter({ slug: record.slug })}>{children}</Link>
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
        {children}
      </Link>
    )
  }

  console.error('renderLinkToRecord: Unknown record type', record)

  return null
}
