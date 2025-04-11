import { type TypedDocumentNode, gql } from '@urql/core'
import type { PageDetailSeoFragment } from '../generated/graphql'
import { identifiable } from './identifiable'
import { seoField } from './seoField'
import { tag } from './tag'

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
