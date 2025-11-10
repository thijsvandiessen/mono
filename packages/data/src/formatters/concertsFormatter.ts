import type { Concert } from '../types/concert.js'
import type { ConcertDetailFragment } from '../generated/graphql.js'
import { concertFormatter } from './concertFormatter.js'

export const concertsFormatter = (
  concerts: ConcertDetailFragment[]
): Concert[] =>
  concerts.reduce((prevValue: Concert[], currentConcert) => {
    const concert = concertFormatter(currentConcert)

    if (concert?.id) {
      prevValue.push(concert)
    }

    return prevValue
  }, [])
