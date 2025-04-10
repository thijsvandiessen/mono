import { client } from '../gqlClient'
import {
  GetPageDocument,
  type GetPageQuery,
  type GetPageQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'

export const getPage = async ({
  slug,
}: GetPageQueryVariables): Promise<
  | {
      data: GetPageQuery['page']
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetPageQuery,
      GetPageQueryVariables
    >(GetPageDocument, { slug })
    return {
      data: data?.page ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
