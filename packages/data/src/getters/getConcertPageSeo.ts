import {
  GetConcertSeoDocument,
  type GetConcertSeoQuery,
  type GetConcertSeoQueryVariables,
} from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { metadataFormatter } from '../formatters/metadataFormatter.js'
import { slugFormatter } from '@mono/utils'

export const getConcertPageSeo = async ({
  slug,
}: GetConcertSeoQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetConcertSeoQuery,
      GetConcertSeoQueryVariables
    >(GetConcertSeoDocument, { slug })

    return {
      data: await metadataFormatter(
        data?.concert ?? undefined,
        slugFormatter({ slug, prefix: '/concerten' })
      ),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: await metadataFormatter(undefined, slug), error }
  }
}
