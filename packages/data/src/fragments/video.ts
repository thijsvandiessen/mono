import { type TypedDocumentNode, gql } from '@urql/core'
import type {
  VideoFieldFragment,
  VideoFragment,
  VideoUploadFragment,
} from '../generated/graphql'
import { identifiable } from './identifiable'

export const videoUpload: TypedDocumentNode<VideoUploadFragment> = gql`
  fragment videoUpload on UploadVideoField {
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`

export const video: TypedDocumentNode<VideoFragment> = gql`
  fragment video on VideoRecord {
    ...identifiable
    title
    media {
      ...videoField
    }
    thumbnail
  }
  ${identifiable}
`

export const videoField: TypedDocumentNode<VideoFieldFragment> = gql`
  fragment videoField on VideoField {
    height
    provider
    providerUid
    thumbnailUrl
    title
    url
    width
  }
`
