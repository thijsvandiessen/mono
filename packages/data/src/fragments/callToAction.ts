import { type AnyVariables, type TypedDocumentNode, gql } from '@urql/core'
import type { CallToActionFragment } from '../generated/graphql.js'
import { concertLink } from './concertLink.js'
import { identifiable } from './identifiable.js'
import { pageLink } from './pageLink.js'

export const callToAction: TypedDocumentNode<
  CallToActionFragment,
  AnyVariables
> = gql`
  fragment callToAction on CallToActionRecord {
    ...identifiable
    label
    variant
    externalUrl
    pageLink {
      ... on ConcertRecord {
        ...concertLink
      }
      ... on PageRecord {
        ...pageLink
      }
    }
  }
  ${identifiable}
  ${concertLink}
  ${pageLink}
`
