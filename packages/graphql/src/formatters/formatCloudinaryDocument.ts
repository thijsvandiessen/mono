import type { CloudinaryAsset } from '../types/image'

interface Document {
  id: string
  url: string
  bytes?: number
}

export const formatCloudinaryDocument = (
  document: CloudinaryAsset | undefined
): Document | undefined => {
  if (!document?.id) return
  if (!document.version) return
  if (!document?.secure_url) return
  if (document.format !== 'pdf') return
  return {
    id: `v${document.version}/${document.id}`,
    url: document.secure_url,
    bytes: document.bytes,
  }
}
