import type {
  GetConcertPageQueryVariables,
  GetConcertQuery,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail.js'

export const GET_CONCERT: TypedDocumentNode<
  GetConcertQuery,
  GetConcertPageQueryVariables
> = gql`
  query getConcert($id: ItemId!) {
    concert(filter: { id: { eq: $id } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
