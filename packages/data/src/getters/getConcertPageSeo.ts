import {
  GetConcertSeoDocument,
  type GetConcertSeoQuery,
  type GetConcertSeoQueryVariables,
} from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getSiteMetadata } from './getSiteMetadata.js'
import { metadataFormatter } from '../formatters/index.js'
import { slugFormatter } from '@mono/utils'

export const getConcertPageSeo = async ({
  slug,
}: GetConcertSeoQueryVariables) => {
  const { metadata } = await getSiteMetadata()

  try {
    const { data, error } = await client.query<
      GetConcertSeoQuery,
      GetConcertSeoQueryVariables
    >(GetConcertSeoDocument, { slug })

    return {
      data: await metadataFormatter(
        data?.concert ?? undefined,
        metadata,
        slugFormatter({ slug, prefix: '/concerten' })
      ),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: await metadataFormatter(undefined, metadata, slug), error }
  }
}
