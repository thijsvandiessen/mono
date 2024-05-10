import { client } from '../gqlClient'
import { metadataFormatter } from '../formatters/metadataFormatter'
import { slugFormatter } from '@mono/utils/src/slugFormatter'
import {
  GetEventSeoDocument,
  type GetEventSeoQuery,
  type GetEventSeoQueryVariables,
} from '../generated/graphql'

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
