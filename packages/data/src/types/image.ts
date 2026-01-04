import { type CloudinaryAsset, CloudinaryAssetSchema } from './image.schema.js'

export interface Image {
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
  console.log('isOfTypeCloudinaryAsset', asset)
  return CloudinaryAssetSchema.safeParse(asset).success
}
