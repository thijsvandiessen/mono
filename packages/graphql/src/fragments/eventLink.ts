import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import type { TypedDocumentNode } from '@urql/core'
import type { EventLinkFragment } from '../generated/graphql'

export const eventLink: TypedDocumentNode<EventLinkFragment> = gql`
  fragment eventLink on ConcertRecord {
    ...identifiable
    title
    slug
  }
  ${identifiable}
`
