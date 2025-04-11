import type {
  ImageFragment,
  ResponsiveImageFragment,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { identifiable } from './identifiable'

export const responsiveImage: TypedDocumentNode<ResponsiveImageFragment> = gql`
  fragment responsiveImage on ResponsiveImage {
    title
    alt
    sizes
    aspectRatio
    bgColor
    src
    height
    width
  }
`

export const image: TypedDocumentNode<ImageFragment> = gql`
  fragment image on ImageRecord {
    ...identifiable
    image
  }
  ${identifiable}
`
export const document: TypedDocumentNode<DocumentFragment> = gql`
  fragment document on DocumentRecord {
    ...identifiable
    document
  }
  ${identifiable}
`
