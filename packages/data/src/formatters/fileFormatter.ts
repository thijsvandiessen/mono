import type { FileFragment } from '../generated/graphql.js'
import type { Image } from '../types/image.js'

export const fileFormatter = (data: FileFragment): Image => ({
  id: data.id,
  title: data.title ?? '',
  description: data.alt ?? '',
  url: data.url,
  width: data.width ?? undefined,
  height: data.height ?? undefined,
})
