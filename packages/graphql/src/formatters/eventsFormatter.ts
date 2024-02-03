import type { ConcertDetailFragment } from '../generated/graphql'
import type { Event } from '../types/event'
import { eventFormatter } from './eventFormatter'

export const eventsFormatter = (
  events: ConcertDetailFragment[]
): (Event | undefined)[] => events.map((event) => eventFormatter(event))
