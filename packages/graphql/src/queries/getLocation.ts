import { gql } from '@urql/core'

import { location } from '../fragments/location'

export const GET_LOCATION = gql`
  query getLocation($id: ItemId) {
    location(filter: { id: { eq: $id } }) {
      ...location
    }
  }
  ${location}
`
