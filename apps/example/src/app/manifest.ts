import { createManifest } from "@mono/site-config";
import { siteConfig } from "../../site.config";

export default function manifest() {
  return createManifest(siteConfig);
}
