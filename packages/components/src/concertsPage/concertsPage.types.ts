import type { Event } from '@mono/data'

export interface EventsProps {
  eventData: Event[] | null
  first: number
  numberOfEvents: number
}
