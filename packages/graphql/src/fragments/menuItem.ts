import { gql } from '@urql/core'
import { pageLink } from './pageLink'
import { concertLink } from './concertLink'

export const menuItem = gql`
  fragment menuItem on MenuItemRecord {
    id
    label
    link {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
  }
  ${concertLink}
  ${pageLink}
`
