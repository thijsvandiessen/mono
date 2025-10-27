import type { Concert } from '@mono/data'

interface Props {
  concerts: Concert[]
}

export const pastConcerts = ({ concerts }: Props) =>
  concerts.filter((concert) => {
    if (concert.locations.length === 0) return true
    return concert.locations.some((location) => {
      if (!location.startTime) return true

      return new Date(location.startTime) < new Date()
    })
  })
