import { gql } from '@urql/core'
import { concertDetail } from '../fragments/concertDetail'

export const GET_EVENT_PAGE = gql`
  query getEventPage($slug: String!) {
    concert(filter: { slug: { eq: $slug } }) {
      ...concertDetail
    }
  }
  ${concertDetail}
`
