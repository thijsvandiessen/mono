import type { ColorsFragment } from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'

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
