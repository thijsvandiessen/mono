import type {
  GetLocationQuery,
  GetLocationQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { location } from '../fragments/location.js'

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
