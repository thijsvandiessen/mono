import type {
  GetConcertsUrlsQuery,
  GetConcertsUrlsQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertLink } from '../fragments/concertLink.js'

export const GET_CONCERT_URLS: TypedDocumentNode<
  GetConcertsUrlsQuery,
  GetConcertsUrlsQueryVariables
> = gql`
  query getConcertsUrls(
    $skip: IntType!
    $first: IntType!
    $order: [ConcertModelOrderBy]
  ) {
    allConcerts(first: $first, skip: $skip, orderBy: $order) {
      ...concertLink
    }
  }
  ${concertLink}
`
