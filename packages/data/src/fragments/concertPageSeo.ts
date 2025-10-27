import { type TypedDocumentNode, gql } from '@urql/core'
import type { ConcertPageSeoFragment } from '../generated/graphql.js'
import { identifiable } from './identifiable.js'
import { seoField } from './seoField.js'
import { tag } from './tag.js'

export const concertPageSeo: TypedDocumentNode<ConcertPageSeoFragment> = gql`
  fragment concertPageSeo on ConcertRecord {
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
