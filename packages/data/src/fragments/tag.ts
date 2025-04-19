import { type TypedDocumentNode, gql } from '@urql/core'
import type { TagFragment } from '../generated/graphql.js'

export const tag: TypedDocumentNode<TagFragment> = gql`
  fragment tag on Tag {
    attributes
    content
    tag
  }
`
