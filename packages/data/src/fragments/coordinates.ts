import type { CoordinatesFragment } from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'

export const coordinates: TypedDocumentNode<CoordinatesFragment> = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`
