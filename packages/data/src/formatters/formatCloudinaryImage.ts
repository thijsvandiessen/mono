import type { CloudinaryAsset, Image } from '../types/image.js'
import { imageSchema } from './schemas.js'

export const formatCloudinaryImage = (
  asset: CloudinaryAsset | undefined
): Image | undefined => {
  if (!asset) return
  return imageSchema.parse({
    id: `v${asset.version}/${asset.id}`,
    title: asset.alt?.en ?? '',
    description: asset.alt?.en ?? '',
    width: asset.width,
    height: asset.height,
    url: asset.secure_url,
  })
}
