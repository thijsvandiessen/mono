import {
  GetEventsMetaDocument,
  type GetEventsMetaQuery,
  type GetEventsMetaQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../gqlClient.js'

export const getEventsMeta = async (): Promise<
  | {
      data: {
        __typename?: 'CollectionMetadata'
        count: number
      } | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
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
