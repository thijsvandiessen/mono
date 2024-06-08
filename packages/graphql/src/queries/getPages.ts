import { gql } from '@urql/core'
import { pageLink } from '../fragments/pageLink'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetPagesQuery,
  GetPagesQueryVariables,
} from '../generated/graphql'

export const GET_PAGES: TypedDocumentNode<
  GetPagesQuery,
  GetPagesQueryVariables
> = gql`
  query getPages($skip: IntType, $first: IntType, $order: [PageModelOrderBy]) {
    allPages(first: $first, skip: $skip, orderBy: $order) {
      ...pageLink
    }Ï
  }
  ${pageLink}
`
