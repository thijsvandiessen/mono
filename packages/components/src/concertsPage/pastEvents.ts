import type { Event } from '@mono/data'

interface Props {
  events: Event[]
}

export const pastEvents = ({ events }: Props) => {
  return events.filter((event) => {
    if (!event?.id) return false

    const pastLocations = event.locations.filter((location) => {
      if (!location.startTime) return false

      return new Date(location.startTime) < new Date()
    })

    return pastLocations.length > 0
  })
}
