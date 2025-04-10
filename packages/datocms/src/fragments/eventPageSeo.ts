import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'
import { identifiable } from './identifiable'
import type { EventPageSeoFragment } from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'

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
