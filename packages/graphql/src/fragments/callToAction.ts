import type { AnyVariables, TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import { concertLink } from './concertLink'
import { pageLink } from './pageLink'
import type { CallToActionFragment } from '../generated/graphql'

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
