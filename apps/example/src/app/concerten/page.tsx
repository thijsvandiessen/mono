import type { Metadata, Viewport } from "next";
import { ConcertsPage } from "@mono/components";
import { getPageSeo } from "@mono/data";
import { siteConfig } from "../../../site.config";
import { viewport } from "@mono/utils";

const pageSlug = "concerten";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: pageSlug, locale: siteConfig.languageTag });
  return data;
}

export const generateViewport = (): Viewport => viewport;

const Page = () => <ConcertsPage />;

export default Page;
