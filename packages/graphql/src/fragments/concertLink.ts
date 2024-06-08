import type { AnyVariables, TypedDocumentNode} from '@urql/core';
import { gql } from '@urql/core'
import { identifiable } from './identifiable'
import type { ConcertLinkFragment } from '../generated/graphql'

export const concertLink: TypedDocumentNode<ConcertLinkFragment, AnyVariables> =
  gql`
    fragment concertLink on ConcertRecord {
      ...identifiable
      title
      slug
    }
    ${identifiable}
  `
