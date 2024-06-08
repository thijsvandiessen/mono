import type { Event } from '@mono/graphql'

export const mockEvent: Event = {
  id: 'id',
  title: 'name',
  image: {
    id: 'image-id',
    title: 'title',
    description: 'desc',
    url: 'https://creaorkest.nl/some-image.png',
  },
  locations: [{ startTime: '2023-09-01T13:32:36+01:00', id: 'test id' }],
  url: 'some-slug',
  content: [],
}
