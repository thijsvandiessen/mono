import { type TypedDocumentNode, gql } from '@urql/core'
import type { EventPageSeoFragment } from '../generated/graphql'
import { identifiable } from './identifiable'
import { seoField } from './seoField'
import { tag } from './tag'

export const eventPageSeo: TypedDocumentNode<EventPageSeoFragment> = gql`
  fragment eventPageSeo on ConcertRecord {
    ...identifiable
    title
    _seoMetaTags {
      ...tag
    }
    seo {
      ...seoField
    }
  }
  ${identifiable}
  ${seoField}
  ${tag}
`
