import { gql } from '@urql/core'
import { callToAction } from './callToAction'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'

export const headerBody = gql`
  fragment headerBody on HeaderModelBodyField {
    blocks {
      ... on CallToActionRecord {
        ...callToAction
      }
    }
    links {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    value
  }
  ${concertLink}
  ${pageLink}
  ${callToAction}
`
