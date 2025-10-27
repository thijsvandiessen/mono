import type { Concert } from '@mono/data'

export interface ConcertsProps {
  concertData: Concert[]
  first: number
  numberOfConcerts: number
}
