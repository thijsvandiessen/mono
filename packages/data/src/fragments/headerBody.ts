import { type TypedDocumentNode, gql } from '@urql/core'
import type { HeaderBodyFragment } from '../generated/graphql'
import { callToAction } from './callToAction'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'

export const headerBody: TypedDocumentNode<HeaderBodyFragment> = gql`
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
