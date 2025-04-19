import { eventFormatter } from './eventFormatter.js'

describe('eventFormatter', () => {
  it('should return a location object', () => {
    expect(
      eventFormatter({
        __typename: 'ConcertRecord',
        _createdAt: 'some date time string',
        _updatedAt: 'some date time string',
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
          address: undefined,
          id: 'location-id',
          lat: undefined,
          lng: undefined,
          startTime: undefined,
          title: undefined,
        },
      ],
      title: 'required title',
      url: '/concerten/some-slug',
      content: [],
    })
  })
})
