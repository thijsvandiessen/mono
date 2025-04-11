import type {
  GetPagesMetaQuery,
  GetPagesMetaQueryVariables,
} from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'

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
