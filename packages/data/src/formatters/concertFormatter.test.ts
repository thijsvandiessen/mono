import { concertFormatter } from './concertFormatter.js'
import { describe, expect, it } from 'vitest'

describe('concertFormatter', () => {
  it('should return a location object', () => {
    expect(
      concertFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        _firstPublishedAt: 'some date time string',
        _publishedAt: 'some date time string',
        id: 'some-id',
        title: 'required title',
        locations: [
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
        ],
        content: [],
        slug: 'some-slug',
      })
    ).toEqual({
      id: 'some-id',
      image: undefined,
      locations: [
        {
          address: null,
          id: 'location-id',
          lat: null,
          lng: null,
          startTime: null,
          ticketLink: null,
          title: null,
        },
      ],
      title: 'required title',
      url: '/concerten/some-slug',
      content: [],
    })
  })

  it('should dedupe locations', () => {
    expect(
      concertFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
        _firstPublishedAt: 'some date time string',
        _publishedAt: 'some date time string',
        id: 'some-id',
        title: 'required title',
        locations: [
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
          {
            id: 'ignore-this-id',
            location: {
              id: 'location-id',
            },
          },
        ],
        content: [],
        slug: 'some-slug',
      })
    ).toEqual({
      id: 'some-id',
      image: undefined,
      locations: [
        {
          address: null,
          id: 'location-id',
          lat: null,
          lng: null,
          startTime: null,
          ticketLink: null,
          title: null,
        },
      ],
      title: 'required title',
      url: '/concerten/some-slug',
      content: [],
    })
  })
})
