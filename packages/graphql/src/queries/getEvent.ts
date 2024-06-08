import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetEventPageQueryVariables,
  GetEventQuery,
} from '../generated/graphql'

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
