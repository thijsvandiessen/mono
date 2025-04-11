import type {
  GetEventsQuery,
  GetEventsQueryVariables,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'

export const GET_EVENTS: TypedDocumentNode<
  GetEventsQuery,
  GetEventsQueryVariables
> = gql`
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
