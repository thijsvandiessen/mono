import type { Event } from '@mono/data'

export const mockEvent: Event = {
  id: 'id',
  title: 'name',
  image: undefined,
  locations: [{ startTime: '2023-09-01T13:32:36+01:00', id: 'test id' }],
  url: 'some-slug',
  content: [],
}
