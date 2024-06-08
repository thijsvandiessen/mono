import { client } from '../gqlClient'
import { locationFormatter } from '../formatters/locationFormatter'
import {
  GetLocationDocument,
  type GetLocationQuery,
  type GetLocationQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'
import type { Location } from '../types'

export const getLocation = async ({
  id,
}: GetLocationQueryVariables): Promise<
  | {
      data: Location | null
      error: CombinedError | undefined
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
      data: data?.location?.id ? locationFormatter(data.location) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
