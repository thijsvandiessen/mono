import {
  ConcertModelOrderBy,
  GetConcertsDocument,
  type GetConcertsQuery,
  type GetConcertsQueryVariables,
} from '../generated/graphql.js'
import type { Concert } from '../types/concert.js'
import { client } from '../gqlClient.js'
import { concertsFormatter } from '../formatters/index.js'

export const getConcerts = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
}: GetConcertsQueryVariables): Promise<{
  data: Concert[]
}> => {
  try {
    const { data } = await client.query<
      GetConcertsQuery,
      GetConcertsQueryVariables
    >(GetConcertsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts ? concertsFormatter(data.allConcerts) : [],
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: [] }
  }
}
