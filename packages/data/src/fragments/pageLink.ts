import { type TypedDocumentNode, gql } from '@urql/core'
import type { PageLinkFragment } from '../generated/graphql'
import { identifiable } from './identifiable'

export const pageLink: TypedDocumentNode<PageLinkFragment> = gql`
  fragment pageLink on PageRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
