import type { ConcertLinkFragment, PageLinkFragment } from '@mono/data'
import type { Record } from 'datocms-structured-text-utils'
import { type RenderRecordLinkContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType.js'
import { slugFormatter } from '@mono/utils'

export const renderLinkToRecord = ({
  record,
  children,
}: RenderRecordLinkContext<Record>) => {
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return <a href={slugFormatter({ slug: record.slug })}>{children}</a>
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
        {children}
      </a>
    )
  }

  console.error('renderLinkToRecord: Unknown record type', record)

  return null
}
