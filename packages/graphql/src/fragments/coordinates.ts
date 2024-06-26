import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'
import type { CoordinatesFragment } from '../generated/graphql'

export const coordinates: TypedDocumentNode<CoordinatesFragment> = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`
