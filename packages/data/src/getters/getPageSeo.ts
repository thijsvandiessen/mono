import {
  GetPageSeoDocument,
  type GetPageSeoQuery,
  type GetPageSeoQueryVariables,
} from "../generated/graphql.js";
import { client } from "../gqlClient.js";
import { getSiteMetadata } from "./getSiteMetadata.js";
import { metadataFormatter } from "../formatters/index.js";

export const getPageSeo = async ({
  slug,
  locale,
}: GetPageSeoQueryVariables & { locale?: string }) => {
  const { metadata } = await getSiteMetadata();

  try {
    const { data, error } = await client.query<GetPageSeoQuery, GetPageSeoQueryVariables>(
      GetPageSeoDocument,
      { slug },
    );

    return {
      data: metadataFormatter(data?.page ?? undefined, metadata, slug, locale),
      error,
    };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return { data: metadataFormatter(undefined, metadata, slug, locale), error };
  }
};
