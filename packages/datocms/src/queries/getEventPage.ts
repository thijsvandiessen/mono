import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetEventPageQuery,
  GetEventPageQueryVariables,
} from '../generated/graphql'

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
