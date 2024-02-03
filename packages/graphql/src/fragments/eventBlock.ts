import { concertLink } from './concertLink'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const eventBlock = gql`
  fragment eventBlock on ConcertListRecord {
    ...identifiable
    pinnedConcerts {
      ...concertLink
    }
    futureConcerts
  }
  ${concertLink}
  ${identifiable}
`
