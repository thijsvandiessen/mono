import { gql } from '@urql/core'
import { seoField } from './seoField'
import { tag } from './tag'
import { identifiable } from './identifiable'
import type { TypedDocumentNode } from '@urql/core'
import type { PageDetailSeoFragment } from '../generated/graphql'

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
