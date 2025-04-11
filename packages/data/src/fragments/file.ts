import { type TypedDocumentNode, gql } from '@urql/core'
import type { FileFragment } from '../generated/graphql'
import { colors } from './colors'
import { focalPoint } from './focalpoint'
import { responsiveImage } from './image'
import { videoUpload } from './video'

export const file: TypedDocumentNode<FileFragment> = gql`
  fragment file on FileField {
    id
    alt
    width
    height
    title
    url
    video {
      ...videoUpload
    }
  }
  ${responsiveImage}
  ${focalPoint}
  ${colors}
  ${videoUpload}
`
