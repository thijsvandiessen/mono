import { z } from 'zod'

const CloudinaryUserSchema = z.object({
  type: z.string(),
  id: z.string(),
})

export const CloudinaryAssetSchema = z.object({
  bytes: z.number(),
  secure_url: z.string(),
  id: z.string(),
  public_id: z.string(),
  resource_type: z.string(),
  width: z.number(),
  height: z.number(),
  created_at: z.union([z.date(), z.string()]).optional(),
  tags: z.array(z.string()),
  created_by: CloudinaryUserSchema,
  duration: z.number().nullable(),
  format: z.string(),
  metadata: z.union([z.array(z.string()), z.object().optional()]).optional(),
  type: z.string(),
  uploaded_by: CloudinaryUserSchema,
  url: z.string().optional(),
  version: z.number(),
  alt: z.record(z.string(), z.string()).optional(),
})

export type CloudinaryAsset = z.infer<typeof CloudinaryAssetSchema>
