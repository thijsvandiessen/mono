import type { ConcertDetailFragment } from '../generated/graphql.js'
import type { ImageSchema } from './image.js'
import type { Location } from './location.js'

export interface Concert {
  id: string
  title: string
  image?: ImageSchema
  locations: Location[]
  url: string
  content?: ConcertDetailFragment['content']
}
