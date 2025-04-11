import { type TypedDocumentNode, gql } from '@urql/core'
import type { SeoFieldFragment } from '../generated/graphql'

export const seoField: TypedDocumentNode<SeoFieldFragment> = gql`
  fragment seoField on SeoField {
    description
    title
    twitterCard
  }
`
