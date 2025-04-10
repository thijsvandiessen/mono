import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetEventsMetaQuery,
  GetEventsMetaQueryVariables,
} from '../generated/graphql'

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
