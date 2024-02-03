import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'

export const callToAction = gql`
  fragment callToAction on CallToActionRecord {
    ...identifiable
    label
    externalUrl
    pageLink {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
    variant
  }
  ${identifiable}
  ${concertLink}
  ${pageLink}
`
