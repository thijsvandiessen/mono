import type { AnyVariables, TypedDocumentNode } from '@urql/core'
import type { ConcertLinkFragment } from '../generated/graphql'
import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const concertLink: TypedDocumentNode<ConcertLinkFragment, AnyVariables> =
  gql`
    fragment concertLink on ConcertRecord {
      ...identifiable
      title
      slug
    }
    ${identifiable}
  `
