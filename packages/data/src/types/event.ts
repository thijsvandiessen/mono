import type { ConcertDetailFragment } from '../generated/graphql.js'
import type { Image } from './image.js'
import type { Location } from './location.js'

export interface Event {
  id: string
  title: string
  image?: Image
  locations: Location[]
  url: string
  content?: ConcertDetailFragment['content']
}
