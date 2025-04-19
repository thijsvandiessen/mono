import { type TypedDocumentNode, gql } from '@urql/core'
import type { LocationItemFragment } from '../generated/graphql.js'
import { location } from './location.js'

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
