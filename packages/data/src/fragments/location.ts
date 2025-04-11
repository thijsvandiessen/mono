import { type TypedDocumentNode, gql } from '@urql/core'
import type { LocationFragment } from '../generated/graphql'
import { coordinates } from './coordinates'

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
