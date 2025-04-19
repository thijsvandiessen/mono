import { type TypedDocumentNode, gql } from '@urql/core'
import type { CoordinatesFragment } from '../generated/graphql.js'

export const coordinates: TypedDocumentNode<CoordinatesFragment> = gql`
  fragment coordinates on LatLonField {
    latitude
    longitude
  }
`
