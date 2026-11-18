import { getCloudinaryUrl, parseCloudinaryAsset } from "./formatCloudinaryImage.js";
import type { CloudinaryAsset } from "../types/image.schema.js";
import { z } from "zod";

interface Document {
  id: string;
  url: string;
  bytes?: number;
}

const documentSchema = z.object({
  id: z.string(),
  url: z.string(),
  bytes: z.number().optional(),
});

export const formatCloudinaryDocument = (
  input: CloudinaryAsset | undefined,
): Document | undefined => {
  const document = parseCloudinaryAsset(input);
  if (!document?.id) return;
  if (!document.version) return;
  const url = getCloudinaryUrl(document);
  if (!url) return;
  if (document.format !== "pdf") return;
  return documentSchema.parse({
    id: `v${document.version}/${document.id}`,
    url,
    bytes: document.bytes,
  });
};
