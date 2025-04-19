import {
  GetEventSeoDocument,
  type GetEventSeoQuery,
  type GetEventSeoQueryVariables,
} from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { metadataFormatter } from '../formatters/metadataFormatter.js'
import { slugFormatter } from '@mono/utils'

export const getEventPageSeo = async ({ slug }: GetEventSeoQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetEventSeoQuery,
      GetEventSeoQueryVariables
    >(GetEventSeoDocument, { slug })

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
