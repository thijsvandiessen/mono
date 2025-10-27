import type {
  GetConcertPageQuery,
  GetConcertPageQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail.js'

export const GET_CONCERT_PAGE: TypedDocumentNode<
  GetConcertPageQuery,
  GetConcertPageQueryVariables
> = gql`
  query getConcertPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
