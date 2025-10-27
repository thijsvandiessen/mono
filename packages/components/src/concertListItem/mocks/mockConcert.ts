import type { Concert } from '@mono/data'

export const mockConcert: Concert = {
  id: 'id',
  title: 'name',
  image: undefined,
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
