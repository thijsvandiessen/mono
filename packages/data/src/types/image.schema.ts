import { z } from "zod";

/*
 * Cloudinary assets come from the DatoCMS Cloudinary plugin and their shape
 * changes over time (e.g. `duration` disappeared from image uploads). Only a
 * URL is needed to show an asset, so that is the only requirement. Every
 * other field is optional and falls back to `undefined` when it has an
 * unexpected shape, instead of rejecting the whole asset.
 */
const optional = <T extends z.ZodType>(schema: T) => schema.optional().catch(undefined);

const CloudinaryUserSchema = z.looseObject({
  type: z.string(),
  id: z.string(),
});

export const CloudinaryAssetSchema = z
  .looseObject({
    secure_url: optional(z.string().min(1)),
    url: optional(z.string().min(1)),
    id: optional(z.string()),
    public_id: optional(z.string()),
    bytes: optional(z.number()),
    resource_type: optional(z.string()),
    width: optional(z.number()),
    height: optional(z.number()),
    created_at: optional(z.union([z.date(), z.string()])),
    tags: optional(z.array(z.string())),
    created_by: optional(CloudinaryUserSchema),
    duration: optional(z.number().nullable()),
    format: optional(z.string()),
    metadata: optional(z.union([z.array(z.string()), z.object({})])),
    type: optional(z.string()),
    uploaded_by: optional(CloudinaryUserSchema),
    version: optional(z.number()),
    alt: optional(z.record(z.string(), z.string())),
  })
  .refine((asset) => Boolean(asset.secure_url ?? asset.url), {
    message: "A Cloudinary asset needs a url",
  });

export type CloudinaryAsset = z.infer<typeof CloudinaryAssetSchema>;
