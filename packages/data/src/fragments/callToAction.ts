import type { AnyVariables, TypedDocumentNode } from '@urql/core'
import type { CallToActionFragment } from '../generated/graphql'
import { concertLink } from './concertLink'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { pageLink } from './pageLink'

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
