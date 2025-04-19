import {
  GetPagesMetaDocument,
  type GetPagesMetaQuery,
  type GetPagesMetaQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../gqlClient.js'

export const getPagesMeta = async (): Promise<
  | {
      data: GetPagesMetaQuery['_allPagesMeta'] | null | undefined
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetPagesMetaQuery,
      GetPagesMetaQueryVariables
    >(GetPagesMetaDocument, {})

    return {
      data: data?._allPagesMeta ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
