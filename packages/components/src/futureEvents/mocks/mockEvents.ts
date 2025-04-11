import { type Event } from '@mono/data'

export const mockEvent: Event = {
  id: 'mock-id',
  title: 'title',
  image: undefined,
  locations: [
    {
      id: 'location-id',
      title: 'location-title',
      address: 'location-',
      lat: 42,
      lng: 24,
      startTime: new Date('2022-01-01').toISOString(),
      ticketLink: 'location-',
    },
  ],
  url: '/some-slug',
  content: [],
}
