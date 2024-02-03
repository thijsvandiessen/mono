import { gql } from '@urql/core'
import { author } from '../fragments/author'

export const GET_AUTHOR = gql`
  query getAuthor($id: ItemId!) {
    person(filter: { id: { eq: $id } }) {
      ...author
    }
  }
  ${author}
`
