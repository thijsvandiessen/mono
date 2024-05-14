import type { Scalars } from '../generated/graphql'

interface CloudinaryUser {
  type?: 'string' | null
  id?: 'string' | null
}

interface CloudinaryDescription {
  en?: string | null
}

export interface CloudinaryAsset {
  bytes: number
  created_at?: Scalars['DateTime'] | null
  created_by?: CloudinaryUser | null
  duration?: string | null
  format: string
  width: number
  height: number
  metadata?: unknown[]
  public_id?: string
  id: string
  resource_type: string
  secure_url: string
  tags: []
  type: string
  uploaded_by?: null
  url?: string
  version: number
  alt?: CloudinaryDescription
}

export interface Image {
  id: string
  title: string
  description: string
  width?: number
  height?: number
  url: string
}

export const isOfTypeCloudinaryAsset = (
  poster?: unknown
): poster is CloudinaryAsset => {
  const keys = [
    'resource_type',
    'type',
    'width',
    'height',
    'id',
    'format',
    'secure_url',
    'version',
  ] as const satisfies Array<keyof CloudinaryAsset>

  switch (true) {
    case poster && typeof poster === 'object':
      for (const key of keys) {
        if (!(key in poster)) return false
      }

      return true

    default:
      return false
  }
}
