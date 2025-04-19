import {
  GetEventDocument,
  type GetEventQuery,
  type GetEventQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Event } from '../types/event.js'
import { client } from '../gqlClient.js'
import { eventFormatter } from '../formatters/eventFormatter.js'

export const getEvent = async ({
  id,
}: GetEventQueryVariables): Promise<
  | {
      data?: Event | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetEventQuery,
      GetEventQueryVariables
    >(GetEventDocument, {
      id,
    })

    return {
      data: data?.concert ? eventFormatter(data.concert) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
