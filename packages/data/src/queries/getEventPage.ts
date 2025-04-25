import type {
  GetEventPageQuery,
  GetEventPageQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail.js'

export const GET_EVENT_PAGE: TypedDocumentNode<
  GetEventPageQuery,
  GetEventPageQueryVariables
> = gql`
  query getEventPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
