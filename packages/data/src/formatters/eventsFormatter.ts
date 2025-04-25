import type { ConcertDetailFragment } from '../generated/graphql.js'
import type { Event } from '../types/event.js'
import { eventFormatter } from './eventFormatter.js'

export const eventsFormatter = (events: ConcertDetailFragment[]): Event[] =>
  events.reduce((prevValue: Event[], currentEvent) => {
    const event = eventFormatter(currentEvent)

    if (event?.id) {
      prevValue.push(event)
    }

    return prevValue
  }, [])
