import { type TypedDocumentNode, gql } from '@urql/core'
import type { FileFragment } from '../generated/graphql.js'
import { colors } from './colors.js'
import { focalPoint } from './focalpoint.js'
import { responsiveImage } from './image.js'
import { videoUpload } from './video.js'

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
