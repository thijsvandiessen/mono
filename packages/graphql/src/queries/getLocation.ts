import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'

import { location } from '../fragments/location'
import type {
  GetLocationQuery,
  GetLocationQueryVariables,
} from '../generated/graphql'

export const GET_LOCATION: TypedDocumentNode<
  GetLocationQuery,
  GetLocationQueryVariables
> = gql`
  query getLocation($id: ItemId) {
    location(filter: { id: { eq: $id } }) {
      ...location
    }
  }
  ${location}
`
