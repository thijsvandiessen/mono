import {
  GetEventPageDocument,
  type GetEventPageQuery,
  type GetEventPageQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Event } from '../types/event.js'
import { client } from '../gqlClient.js'
import { eventFormatter } from '../formatters/eventFormatter.js'

export const getEventPage = async ({
  slug,
}: GetEventPageQueryVariables): Promise<
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
      GetEventPageQuery,
      GetEventPageQueryVariables
    >(GetEventPageDocument, { slug })
    return {
      data: data?.concert ? eventFormatter(data.concert) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
