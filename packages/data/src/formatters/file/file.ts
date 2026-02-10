import type { FileFragment } from '../../generated/graphql.js'
import type { ImageSchema } from '../../types/image.js'
import { imageSchema } from '../schemas.js'

export const fileFormatter = (data: FileFragment): ImageSchema =>
  imageSchema.parse({
    id: data.id,
    title: data.title ?? '',
    description: data.alt ?? '',
    url: data.url,
    width: data.width ?? undefined,
    height: data.height ?? undefined,
  })
