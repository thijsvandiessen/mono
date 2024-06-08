import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { eventFormatter } from './eventFormatter'

export const eventsFormatter = (events: ConcertDetailFragment[]): Event[] =>
  events.reduce((prevValue: Event[], currentEvent) => {
    const event = eventFormatter(currentEvent)

    if (event?.id) {
      return [...prevValue, event]
    }

    return prevValue
  }, [])
