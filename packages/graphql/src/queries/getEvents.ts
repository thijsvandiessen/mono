import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'

export const GET_EVENTS = gql`
  query getEvents(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
