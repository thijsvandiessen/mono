import type { CloudinaryAsset } from '../types/image.schema.js'
import type { ImageSchema } from '../types/image.js'
import { imageSchema } from './schemas.js'

export const formatCloudinaryImage = (
  asset: CloudinaryAsset | undefined
): ImageSchema | undefined => {
  if (!asset?.secure_url) return
  const assetId = asset.version ? `v${asset.version}/${asset.id}` : asset.id
  return imageSchema.parse({
    id: assetId,
    title: asset.alt?.en ?? '',
    description: asset.alt?.en ?? '',
    width: asset.width,
    height: asset.height,
    url: asset.secure_url,
  })
}
