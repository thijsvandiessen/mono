import {
  GetPagesDocument,
  type GetPagesQuery,
  type GetPagesQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { PageLink } from '../types/pageLink.js'
import { client } from '../gqlClient.js'
import { pageUrlFormatter } from '../formatters/pageUrlFormatter.js'

export const getPages = async ({
  skip,
  first,
}: GetPagesQueryVariables): Promise<
  | {
      data: PageLink[]
      error?: CombinedError
    }
  | {
      data: PageLink[]
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
    return { data: [], error }
  }
}
