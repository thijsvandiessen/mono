import { type CloudinaryAsset, CloudinaryAssetSchema } from "../types/image.schema.js";
import type { ImageSchema } from "../types/image.js";
import { imageSchema } from "./schemas.js";

/*
 * Returns the parsed asset, so optional fields with an unexpected shape are
 * replaced by `undefined` instead of being passed on as-is.
 */
export const parseCloudinaryAsset = (asset: unknown): CloudinaryAsset | undefined => {
  const result = CloudinaryAssetSchema.safeParse(asset);
  return result.success ? result.data : undefined;
};

// next/image only allows https remote images, Cloudinary's `url` is plain http.
export const getCloudinaryUrl = (asset: CloudinaryAsset): string | undefined =>
  asset.secure_url ?? asset.url?.replace(/^http:\/\//, "https://");

export const formatCloudinaryImage = (
  input: CloudinaryAsset | undefined,
): ImageSchema | undefined => {
  const asset = parseCloudinaryAsset(input);
  if (!asset) return;
  const url = getCloudinaryUrl(asset);
  if (!url) return;
  const id = asset.id ?? asset.public_id ?? url;
  return imageSchema.parse({
    id: asset.version ? `v${asset.version}/${id}` : id,
    title: asset.alt?.en ?? "",
    description: asset.alt?.en ?? "",
    width: asset.width,
    height: asset.height,
    url,
  });
};
