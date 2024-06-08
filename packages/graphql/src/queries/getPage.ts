import { gql } from '@urql/core'

import { pageDetail } from '../fragments/pageDetail'
import type { TypedDocumentNode } from '@urql/core'
import type { GetPageQuery, GetPageQueryVariables } from '../generated/graphql'

export const GET_PAGE: TypedDocumentNode<GetPageQuery, GetPageQueryVariables> =
  gql`
    query getPage($slug: String!) {
      page(filter: { slug: { eq: $slug } }) {
        ...pageDetail
      }
    }
    ${pageDetail}
  `
