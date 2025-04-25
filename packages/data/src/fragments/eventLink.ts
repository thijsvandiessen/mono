import { type TypedDocumentNode, gql } from '@urql/core'
import type { EventLinkFragment } from '../generated/graphql.js'
import { identifiable } from './identifiable.js'

export const eventLink: TypedDocumentNode<EventLinkFragment> = gql`
  fragment eventLink on ConcertRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
