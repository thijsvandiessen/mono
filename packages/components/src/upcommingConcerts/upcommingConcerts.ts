import type { Concert } from '@mono/data'

interface Props {
  concerts: Concert[]
}

export const upcomingConcerts = ({ concerts }: Props) => {
  return concerts.filter((concert) => {
    const upcomingLocations = concert.locations.filter((location) => {
      if (!location.startTime) return false
      return new Date(location.startTime) > new Date()
    })

    return upcomingLocations.length > 0
  })
}
