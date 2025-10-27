import type {
  GetConcertsMetaQuery,
  GetConcertsMetaQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'

export const GET_CONCERTS_META: TypedDocumentNode<
  GetConcertsMetaQuery,
  GetConcertsMetaQueryVariables
> = gql`
  query getConcertsMeta {
    _allConcertsMeta {
      count
    }
  }
`
