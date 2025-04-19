import type {
  GetEventsMetaQuery,
  GetEventsMetaQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'

export const GET_EVENTS_META: TypedDocumentNode<
  GetEventsMetaQuery,
  GetEventsMetaQueryVariables
> = gql`
  query getEventsMeta {
    _allConcertsMeta {
      count
    }
  }
`
