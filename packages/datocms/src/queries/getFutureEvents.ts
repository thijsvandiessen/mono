import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetFutureEventsQuery,
  GetFutureEventsQueryVariables,
} from '../generated/graphql'

export const GET_FUTURE_EVENTS: TypedDocumentNode<
  GetFutureEventsQuery,
  GetFutureEventsQueryVariables
> = gql`
  query getFutureEvents(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
    $filter: ConcertModelFilter
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order, filter: $filter) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
