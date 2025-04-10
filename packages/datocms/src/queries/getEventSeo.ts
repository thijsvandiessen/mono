import { gql } from '@urql/core'
import { eventPageSeo } from '../fragments/eventPageSeo'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetEventSeoQuery,
  GetEventSeoQueryVariables,
} from '../generated/graphql'

export const GET_EVENT_SEO: TypedDocumentNode<
  GetEventSeoQuery,
  GetEventSeoQueryVariables
> = gql`
  query getEventSeo($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...eventPageSeo
    }
  }
  ${eventPageSeo}
`
