import { gql } from '@urql/core'
import { eventPageSeo } from '../fragments/eventPageSeo'

export const GET_EVENT_SEO = gql`
  query getEventSeo($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...eventPageSeo
    }
  }
  ${eventPageSeo}
`
