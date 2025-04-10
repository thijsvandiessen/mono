import { gql } from '@urql/core'
import { eventLink } from '../fragments/eventLink'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetEventsUrlsQuery,
  GetEventsUrlsQueryVariables,
} from '../generated/graphql'

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
