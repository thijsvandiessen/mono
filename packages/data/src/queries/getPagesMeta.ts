import type {
  GetPagesMetaQuery,
  GetPagesMetaQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'

export const GET_PAGES_META: TypedDocumentNode<
  GetPagesMetaQuery,
  GetPagesMetaQueryVariables
> = gql`
  query getPagesMeta {
    _allPagesMeta {
      count
    }
  }
`
