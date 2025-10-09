import {
  ConcertModelOrderBy,
  GetFutureEventsDocument,
  type GetFutureEventsQuery,
  type GetFutureEventsQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Event } from '../types/event.js'
import { client } from '../gqlClient.js'
import { eventsFormatter } from '../formatters/eventsFormatter.js'

interface Props extends GetFutureEventsQueryVariables {
  skip: number
  first: number
}

export const getFutureEvents = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionDesc,
  filter,
}: Props): Promise<
  | {
      data: Event[]
      error?: CombinedError
    }
  | {
      data: Event[]
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetFutureEventsQuery,
      GetFutureEventsQueryVariables
    >(GetFutureEventsDocument, {
      skip,
      first,
      order,
      filter,
    })

    const allEvents = data?.allConcerts
      ? eventsFormatter(data?.allConcerts)
      : []

    const events = allEvents.filter((event) => {
      return event.locations.some((location) => {
        if (!location?.startTime) return true
        return new Date(location.startTime) > new Date()
      })
    }, [])

    return {
      data: events,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: [], error }
  }
}
