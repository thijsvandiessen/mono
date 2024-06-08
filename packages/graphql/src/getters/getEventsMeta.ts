import { client } from '../gqlClient'
import {
  GetEventsMetaDocument,
  type GetEventsMetaQuery,
  type GetEventsMetaQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'

export const getEventsMeta = async (): Promise<
  | {
      data: {
        __typename?: 'CollectionMetadata' | undefined
        count: number
      } | null
      error: CombinedError | undefined
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
