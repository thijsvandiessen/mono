import { type CloudinaryAsset, CloudinaryAssetSchema } from './image.schema.js'

export interface ImageSchema {
  id: string
  title: string
  description: string
  width?: number
  height?: number
  url: string
}

export const isOfTypeCloudinaryAsset = (
  asset?: unknown
): asset is CloudinaryAsset => {
  return CloudinaryAssetSchema.safeParse(asset).success
}
