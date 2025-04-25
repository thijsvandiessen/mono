import { type TypedDocumentNode, gql } from '@urql/core'
import type { HeaderBodyFragment } from '../generated/graphql.js'
import { callToAction } from './callToAction.js'
import { concertLink } from './concertLink.js'
import { pageLink } from './pageLink.js'

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
