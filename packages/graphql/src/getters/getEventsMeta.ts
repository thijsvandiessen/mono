import { client } from '../gqlClient'
import {
  GetEventsMetaDocument,
  type GetEventsMetaQuery,
  type GetEventsMetaQueryVariables,
} from '../generated/graphql'

export const getEventsMeta = async () => {
  try {
    const { data, error } = await client.query<
      GetEventsMetaQuery,
      GetEventsMetaQueryVariables
    >(GetEventsMetaDocument, {})

    return {
      data: data?._allConcertsMeta ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
