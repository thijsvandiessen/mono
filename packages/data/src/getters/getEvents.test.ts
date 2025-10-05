import { GetEventDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getEvents } from './getEvents.js'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../gqlClient', () => {
  const originalModule = vi.importActual('../gqlClient')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      ...originalModule,
      query: vi.fn(),
    },
  }
})

const mockedQuery = vi.mocked(client.query)

describe('getEvents', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allConcerts: [
          {
            __typename: 'ConcertRecord',
            _createdAt: '2023-09-24T17:30:44+02:00',
            _firstPublishedAt: '2023-09-24T17:30:44+02:00',
            _publishedAt: '2023-09-24T17:30:44+02:00',
            _updatedAt: '2023-09-24T17:30:44+02:00',
            id: '186234305',
            title: 'another concert',
            slug: 'another-concert',
            locations: [],
            poster: {
              id: '72577339',
              alt: null,
              width: 342,
              height: 384,
              title: null,
              url: 'https://www.datocms-assets.com/screenshot.png',
              video: null,
              __typename: 'FileField',
            },
            persons: [],
          },
        ],
      },
      operation: {
        key: 1,
        query: GetEventDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://current--vandiessen-mono-graph.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getEvents({ skip: 0, first: 1 })
    expect(data).toEqual([
      {
        id: '186234305',
        image: undefined,
        locations: [],
        title: 'another concert',
        url: '/concerten/another-concert',
      },
    ])
  })

  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEvents({ skip: 0, first: 1 })
    expect(data).toEqual([])
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
