import { eventsFormatter } from './eventsFormatter.js'
import { describe, it, expect } from 'vitest'

describe('eventsFormatter', () => {
  it('should return undefined if there is no concert', () => {
    expect(eventsFormatter([])).toEqual([])
  })

  it('should return an object', () => {
    expect(
      eventsFormatter([
        {
          __typename: 'ConcertRecord',
          id: 'some-id',
          title: 'required title',
          slug: 'required-slug',
          _updatedAt: '2023-08-14T09:37:24+01:00',
          _createdAt: '2023-09-01T13:32:36+01:00',
          _firstPublishedAt: 'some date time string',
          _publishedAt: 'some date time string',
          locations: [
            {
              id: 'locations-id',
              location: {
                id: 'location-id',
              },
            },
          ],
          content: [],
        },
      ])
    ).toEqual([
      {
        id: 'some-id',
        image: undefined,
        locations: [
          {
            id: 'location-id',
            address: undefined,
            lat: undefined,
            lng: undefined,
            startTime: undefined,
            title: undefined,
          },
        ],
        title: 'required title',
        url: '/concerten/required-slug',
        content: [],
      },
    ])
  })
})
