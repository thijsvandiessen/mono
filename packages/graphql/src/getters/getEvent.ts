import { client } from '../gqlClient'
import { eventFormatter } from '../formatters/eventFormatter'
import {
  GetEventDocument,
  type GetEventQuery,
  type GetEventQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'
import type { Event } from '../types/event'

export const getEvent = async ({
  id,
}: GetEventQueryVariables): Promise<
  | {
      data: Event | null | undefined
      error: CombinedError | undefined
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
