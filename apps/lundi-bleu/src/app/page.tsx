import type { Metadata, Viewport } from "next";
import { DefaultPage } from "@mono/components";
import { getPageSeo } from "@mono/data";
import { siteConfig } from "../../site.config";
import { viewport } from "@mono/utils";

const homepageSlug = "homepage";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPageSeo({ slug: homepageSlug, locale: siteConfig.languageTag });
  return data;
}

export const generateViewport = (): Viewport => viewport;

const Page = () => <DefaultPage slug={homepageSlug} />;

export default Page;
