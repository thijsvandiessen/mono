import type { Event } from '@mono/data'

interface Props {
  events: Event[]
}

export const pastEvents = ({ events }: Props) =>
  events.filter((event) => {
    if (event.locations.length === 0) return true
    return event.locations.some((location) => {
      if (!location.startTime) return true

      return new Date(location.startTime) < new Date()
    })
  })
