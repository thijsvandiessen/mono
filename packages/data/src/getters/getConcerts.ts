import {
  ConcertModelOrderBy,
  GetConcertsDocument,
  type GetConcertsQuery,
  type GetConcertsQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Concert } from '../types/concert.js'
import { client } from '../gqlClient.js'
import { concertsFormatter } from '../formatters/concertsFormatter.js'

export const getConcerts = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
}: GetConcertsQueryVariables): Promise<
  | {
      data: Concert[]
      error?: CombinedError
    }
  | {
      data: Concert[]
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetConcertsQuery,
      GetConcertsQueryVariables
    >(GetConcertsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts ? concertsFormatter(data.allConcerts) : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: [], error }
  }
}
