import { createRobots } from "@mono/site-config";
import { siteConfig } from "../../site.config";

export default function robots() {
  return createRobots(siteConfig);
}
