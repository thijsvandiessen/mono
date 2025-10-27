import {
  GetConcertsMetaDocument,
  type GetConcertsMetaQuery,
  type GetConcertsMetaQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../gqlClient.js'

export const getConcertsMeta = async (): Promise<
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
      GetConcertsMetaQuery,
      GetConcertsMetaQueryVariables
    >(GetConcertsMetaDocument, {})

    return {
      data: data?._allConcertsMeta ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
