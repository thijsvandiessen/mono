import { type TypedDocumentNode, gql } from '@urql/core'
import type { LocationFragment } from '../generated/graphql.js'
import { coordinates } from './coordinates.js'

export const location: TypedDocumentNode<LocationFragment> = gql`
  fragment location on LocationRecord {
    id
    title
    addressTitle
    address {
      ...coordinates
    }
  }
  ${coordinates}
`
