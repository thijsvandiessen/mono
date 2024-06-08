import type { ConcertDetailFragment } from '../generated/graphql'
import type { Image } from './image'
import type { Location } from './location'

export interface Event {
  id: string
  title: string
  image?: Image
  locations: Location[]
  url: string
  content?: ConcertDetailFragment['content']
}
