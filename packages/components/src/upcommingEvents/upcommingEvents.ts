import type { Event } from '@mono/data'

interface Props {
  events: Event[]
}

export const upcomingEvents = ({ events }: Props) => {
  return events.filter((event) => {
    const upcomingLocations = event.locations.filter((location) => {
      if (!location.startTime) return false
      return new Date(location.startTime) > new Date()
    })

    return upcomingLocations.length > 0
  })
}
