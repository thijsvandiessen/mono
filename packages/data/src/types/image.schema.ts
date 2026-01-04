import { z } from 'zod'

const CloudinaryUserSchema = z.object({
  type: z.literal('string').nullable().optional(),
  id: z.literal('string').nullable().optional(),
})

const CloudinaryDescriptionSchema = z.object({
  en: z.string().nullable().optional(),
})

export const CloudinaryAssetSchema = z
  .object({
    bytes: z.number(),
    created_at: z.string().datetime().nullable().optional(),
    created_by: CloudinaryUserSchema.nullable().optional(),
    duration: z.string().nullable().optional(),
    format: z.string(),
    width: z.number(),
    height: z.number(),
    metadata: z.array(z.unknown()).optional(),
    public_id: z.string().optional(),
    id: z.string(),
    resource_type: z.string(),
    secure_url: z.string(),
    tags: z.array(z.string()),
    type: z.string(),
    uploaded_by: z.null().optional(),
    url: z.string().optional(),
    version: z.number(),
    alt: CloudinaryDescriptionSchema.optional(),
  })
  .catchall(z.unknown())
