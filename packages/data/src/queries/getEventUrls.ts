import type {
  GetEventsUrlsQuery,
  GetEventsUrlsQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { eventLink } from '../fragments/eventLink.js'

export const GET_EVENT_URLS: TypedDocumentNode<
  GetEventsUrlsQuery,
  GetEventsUrlsQueryVariables
> = gql`
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
