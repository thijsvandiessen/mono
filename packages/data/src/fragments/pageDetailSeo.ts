import { type TypedDocumentNode, gql } from '@urql/core'
import type { PageDetailSeoFragment } from '../generated/graphql.js'
import { identifiable } from './identifiable.js'
import { seoField } from './seoField.js'
import { tag } from './tag.js'

export const pageDetailSeo: TypedDocumentNode<PageDetailSeoFragment> = gql`
  fragment pageDetailSeo on PageRecord {
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
