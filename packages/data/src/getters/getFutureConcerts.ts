import {
  ConcertModelOrderBy,
  GetFutureConcertsDocument,
  type GetFutureConcertsQuery,
  type GetFutureConcertsQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Concert } from '../types/concert.js'
import { client } from '../gqlClient.js'
import { concertsFormatter } from '../formatters/concertsFormatter.js'

interface Props extends GetFutureConcertsQueryVariables {
  skip: number
  first: number
}

export const getFutureConcerts = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionDesc,
  filter,
}: Props): Promise<
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
      GetFutureConcertsQuery,
      GetFutureConcertsQueryVariables
    >(GetFutureConcertsDocument, {
      skip,
      first,
      order,
      filter,
    })

    const allConcerts = data?.allConcerts
      ? concertsFormatter(data?.allConcerts)
      : []

    const concerts = allConcerts.filter((concert) => {
      return concert.locations.some((location) => {
        if (!location?.startTime) return true
        return new Date(location.startTime) > new Date()
      })
    }, [])

    return {
      data: concerts,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: [], error }
  }
}
