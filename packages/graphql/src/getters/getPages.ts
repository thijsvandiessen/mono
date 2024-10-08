import { client } from '../gqlClient'
import {
  GetPagesDocument,
  type GetPagesQuery,
  type GetPagesQueryVariables,
} from '../generated/graphql'
import { pageUrlFormatter } from '../formatters/pageUrlFormatter'
import type { CombinedError } from '@urql/core'
import type { PageLink } from '../types'

export const getPages = async ({
  skip,
  first,
}: GetPagesQueryVariables): Promise<
  | {
      data: PageLink[]
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetPagesQuery,
      GetPagesQueryVariables
    >(GetPagesDocument, {
      skip,
      first,
    })

    return {
      data: data?.allPages.length ? pageUrlFormatter(data.allPages) : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
