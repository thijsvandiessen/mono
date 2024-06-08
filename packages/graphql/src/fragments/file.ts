import { colors } from './colors'
import { focalPoint } from './focalpoint'
import { gql } from '@urql/core'
import type { TypedDocumentNode } from '@urql/core'

import { responsiveImage } from './image'
import { videoUpload } from './video'
import type { FileFragment } from '../generated/graphql'

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
