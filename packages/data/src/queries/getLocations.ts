import type {
  GetLocationsQuery,
  GetLocationsQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { location } from '../fragments/location.js'

export const GET_LOCATIONS: TypedDocumentNode<
  GetLocationsQuery,
  GetLocationsQueryVariables
> = gql`
  query getLocations(
    $first: IntType
    $skip: IntType
    $order: [LocationModelOrderBy]
  ) {
    allLocations(first: $first, skip: $skip, orderBy: $order) {
      ...location
    }
  }
  ${location}
`
