import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import type { TypedDocumentNode } from '@urql/core'
import type { PageLinkFragment } from '../generated/graphql'

export const pageLink: TypedDocumentNode<PageLinkFragment> = gql`
  fragment pageLink on PageRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
