import { gql } from '@urql/core'
import { eventLink } from '../fragments/eventLink'

export const GET_EVENT_URLS = gql`
  query getEventsUrls(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...eventLink
    }
  }
  ${eventLink}
`
