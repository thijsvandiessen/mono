import type { GetPageQuery, GetPageQueryVariables } from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { pageDetail } from '../fragments/pageDetail'

export const GET_PAGE: TypedDocumentNode<GetPageQuery, GetPageQueryVariables> =
  gql`
    query getPage($slug: String!) {
      page(filter: { slug: { eq: $slug } }) {
        ...pageDetail
      }
    }
    ${pageDetail}
  `
