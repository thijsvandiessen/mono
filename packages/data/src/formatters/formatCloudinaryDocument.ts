import type { CloudinaryAsset } from '../types/image.js'
import { z } from 'zod'

interface Document {
  id: string
  url: string
  bytes?: number
}

const documentSchema = z.object({
  id: z.string(),
  url: z.string(),
  bytes: z.number().optional(),
})

export const formatCloudinaryDocument = (
  document: CloudinaryAsset | undefined
): Document | undefined => {
  if (!document?.id) return
  if (!document.version) return
  if (!document?.secure_url) return
  if (document.format !== 'pdf') return
  return documentSchema.parse({
    id: `v${document.version}/${document.id}`,
    url: document.secure_url,
    bytes: document.bytes,
  })
}
