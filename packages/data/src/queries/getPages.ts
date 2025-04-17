import type {
  GetPagesQuery,
  GetPagesQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { pageLink } from '../fragments/pageLink.js'

export const GET_PAGES: TypedDocumentNode<
  GetPagesQuery,
  GetPagesQueryVariables
> = gql`
  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {
    allPages(first: $first, skip: $skip, orderBy: $order) {
      ...pageLink
    }
  }
  ${pageLink}
`
