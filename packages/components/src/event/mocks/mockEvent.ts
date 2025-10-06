import type { Event } from '@mono/data'

export const mockEvent: Event = {
  id: 'id',
  title: 'name',
  image: {
    id: 'image-id',
    title: 'title',
    description: 'desc',
    url: 'https://example.nl/some-image.png',
  },
  locations: [
    {
      startTime: '2023-09-01T13:32:36+01:00',
      id: 'test id',
      title: 'test',
      address: 'test',
      ticketLink: 'https://example.com',
      lat: 0,
      lng: 0,
    },
  ],
  url: 'some-slug',
  content: [],
}
