import {
  GetLocationsDocument,
  type GetLocationsQuery,
  type GetLocationsQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Location } from '../types/location.js'
import { client } from '../gqlClient.js'
import { locationsFormatter } from '../formatters/locationsFormatter.js'

export const getLocations = async ({
  first,
  skip,
}: GetLocationsQueryVariables): Promise<
  | {
      data: Location[] | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetLocationsQuery,
      GetLocationsQueryVariables
    >(GetLocationsDocument, {
      first,
      skip,
    })

    return {
      data: data?.allLocations ? locationsFormatter(data.allLocations) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
