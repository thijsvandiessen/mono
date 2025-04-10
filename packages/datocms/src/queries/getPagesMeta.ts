import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetPagesMetaQuery,
  GetPagesMetaQueryVariables,
} from '../generated/graphql'

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
