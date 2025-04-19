import { type TypedDocumentNode, gql } from '@urql/core'
import type { ColorsFragment } from '../generated/graphql.js'

export const colors: TypedDocumentNode<ColorsFragment> = gql`
  fragment colors on ColorField {
    alpha
    blue
    cssRgb
    green
    hex
    red
  }
`
