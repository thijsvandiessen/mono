import { client } from '../gqlClient'
import { metadataFormatter } from '../formatters/metadataFormatter'
import {
  GetPageSeoDocument,
  type GetPageSeoQuery,
  type GetPageSeoQueryVariables,
} from '../generated/graphql'

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
