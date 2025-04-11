import { type TypedDocumentNode, gql } from '@urql/core'
import type { TagFragment } from '../generated/graphql'

export const tag: TypedDocumentNode<TagFragment> = gql`
  fragment tag on Tag {
    attributes
    content
    tag
  }
`
