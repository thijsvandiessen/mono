import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'
import type { ColorsFragment } from '../generated/graphql'

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
