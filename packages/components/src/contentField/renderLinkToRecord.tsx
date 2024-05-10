import { Children } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import type { Record } from 'datocms-structured-text-utils'
import type { RenderRecordLinkContext } from 'react-datocms/structured-text'
import { isOfType } from './isOfType'
import { slugFormatter } from '@mono/utils/src/slugFormatter'
import type {
  ConcertLinkFragment,
  PageLinkFragment,
} from '@mono/graphql/src/generated/graphql'

function getTextChildren(children: ReactNode | ReactNode[]) {
  const textChildren = Children.toArray(children).map((child) => {
    if (typeof child === 'object' && 'props' in child) {
      return child.props.children
    }
    return child
  })

  return textChildren
}

export const renderLinkToRecord = ({
  record,
  children,
}: RenderRecordLinkContext<Record>) => {
  const textChildren = getTextChildren(children)
  if (isOfType<PageLinkFragment>(record, 'PageRecord')) {
    if (!record.slug) return null
    return (
      <Link href={slugFormatter({ slug: record.slug })}>{textChildren}</Link>
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
        {textChildren}
      </Link>
    )
  }
  // TODO: error logging
  return null
}
