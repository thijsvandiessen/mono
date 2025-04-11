import type {
  GetEventPageQueryVariables,
  GetEventQuery,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'

export const GET_EVENT: TypedDocumentNode<
  GetEventQuery,
  GetEventPageQueryVariables
> = gql`
  query getEvent($id: ItemId!) {
    concert(filter: { id: { eq: $id } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
