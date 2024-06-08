import type { TypedDocumentNode } from '@urql/core'
import { coordinates } from './coordinates'
import { gql } from '@urql/core'
import type { LocationFragment } from '../generated/graphql'

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
