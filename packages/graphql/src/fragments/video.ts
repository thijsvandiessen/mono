import { gql } from '@urql/core'
import { identifiable } from './identifiable'

export const videoUpload = gql`
  fragment videoUpload on UploadVideoField {
    mp4Url
    muxAssetId
    muxPlaybackId
    streamingUrl
    thumbnailUrl
  }
`

export const video = gql`
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

export const videoField = gql`
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
