import { type TypedDocumentNode, gql } from '@urql/core'
import type { EventPageSeoFragment } from '../generated/graphql.js'
import { identifiable } from './identifiable.js'
import { seoField } from './seoField.js'
import { tag } from './tag.js'

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
