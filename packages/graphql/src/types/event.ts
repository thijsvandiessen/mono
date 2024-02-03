import type { Author } from './author'
import type { ConcertDetailFragment } from '../generated/graphql'
import type { Image } from './image'
import type { Location } from './location'
import type { Music } from './music'

export interface Event {
  id: string
  title: string
  image?: Image
  locations: (Location | undefined)[]
  persons: (Author | undefined)[]
  program: (Music | undefined)[]
  url: string
  content?: ConcertDetailFragment['content']
}
