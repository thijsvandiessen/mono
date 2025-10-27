import {
  GetConcertPageDocument,
  type GetConcertPageQuery,
  type GetConcertPageQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Concert } from '../types/concert.js'
import { client } from '../gqlClient.js'
import { concertFormatter } from '../formatters/concertFormatter.js'

export const getConcertPage = async ({
  slug,
}: GetConcertPageQueryVariables): Promise<
  | {
      data?: Concert | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetConcertPageQuery,
      GetConcertPageQueryVariables
    >(GetConcertPageDocument, { slug })
    return {
      data: data?.concert ? concertFormatter(data.concert) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
