import {
  GetLocationDocument,
  type GetLocationQuery,
  type GetLocationQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Location } from '../types/location.js'
import { client } from '../gqlClient.js'
import { locationFormatter } from '../formatters/index.js'

export const getLocation = async ({
  id,
}: GetLocationQueryVariables): Promise<
  | {
      data: Location | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetLocationQuery,
      GetLocationQueryVariables
    >(GetLocationDocument, {
      id,
    })

    return {
      data: data?.location ? locationFormatter(data.location) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
