import {
  GetPageSeoDocument,
  type GetPageSeoQuery,
  type GetPageSeoQueryVariables,
} from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { metadataFormatter } from '../formatters/metadataFormatter.js'

export const getPageSeo = async ({ slug }: GetPageSeoQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetPageSeoQuery,
      GetPageSeoQueryVariables
    >(GetPageSeoDocument, { slug })

    return {
      data: await metadataFormatter(data?.page ?? undefined, slug),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: await metadataFormatter(undefined, slug), error }
  }
}
