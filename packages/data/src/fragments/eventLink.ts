import { type TypedDocumentNode, gql } from '@urql/core'
import type { EventLinkFragment } from '../generated/graphql'
import { identifiable } from './identifiable'

export const eventLink: TypedDocumentNode<EventLinkFragment> = gql`
  fragment eventLink on ConcertRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
