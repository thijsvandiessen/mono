import type { AnyVariables, TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'
import type { IdentifiableFragment } from '../generated/graphql'

export const identifiable: TypedDocumentNode<
  IdentifiableFragment,
  AnyVariables
> = gql`
  fragment identifiable on RecordInterface {
    __typename
    _createdAt
    _firstPublishedAt
    _publishedAt
    _updatedAt
    id
  }
`
