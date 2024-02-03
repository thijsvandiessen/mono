import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'

export const GET_EVENT = gql`
  query getEvent($id: ItemId!) {
    concert(filter: { id: { eq: $id } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
