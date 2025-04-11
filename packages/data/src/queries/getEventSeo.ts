import type {
  GetEventSeoQuery,
  GetEventSeoQueryVariables,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { eventPageSeo } from '../fragments/eventPageSeo'

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
