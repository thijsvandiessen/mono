import { gql } from '@urql/core'
import { location } from './location'
import type { TypedDocumentNode } from '@urql/core'
import type { LocationItemFragment } from '../generated/graphql'

export const locationItem: TypedDocumentNode<LocationItemFragment> = gql`
  fragment locationItem on LocationItemRecord {
    id
    dateTime
    location {
      ...location
    }
    ticketLink
  }
  ${location}
`
