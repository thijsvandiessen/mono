import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'
import type { FocalPointFragment } from '../generated/graphql'

export const focalPoint: TypedDocumentNode<FocalPointFragment> = gql`
  fragment focalPoint on focalPoint {
    x
    y
  }
`
