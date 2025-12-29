import {
  ConcertModelOrderBy,
  GetConcertsUrlsDocument,
  type GetConcertsUrlsQuery,
  type GetConcertsUrlsQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { PageLink } from '../types/pageLink.js'
import { client } from '../gqlClient.js'
import { concertUrlFormatter } from '../formatters/index.js'

interface Props extends GetConcertsUrlsQueryVariables {
  skip: number
  first: number
}

export const getConcertUrls = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
}: Props): Promise<
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
      GetConcertsUrlsQuery,
      GetConcertsUrlsQueryVariables
    >(GetConcertsUrlsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts.length
        ? concertUrlFormatter(data.allConcerts, '/concerten')
        : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
