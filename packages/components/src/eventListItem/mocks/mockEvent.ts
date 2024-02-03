import type { Event } from '@crea/graphql/src/types/event'

export const mockEvent: Event = {
  id: 'id',
  title: 'name',
  image: undefined,
  locations: [{ startTime: '2023-09-01T13:32:36+01:00', id: 'test id' }],
  persons: [],
  program: [],
  url: 'some-slug',
  content: [],
}
