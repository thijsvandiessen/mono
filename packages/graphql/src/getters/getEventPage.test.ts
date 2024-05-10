import { GetEventPageDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getEventPage } from './getEventPage'

jest.mock('../gqlClient', () => {
  const originalModule = jest.requireActual('../gqlClient')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      ...originalModule,
      query: jest.fn(),
    },
  }
})

const mockedQuery = jest.mocked(client.query)

describe('getEventPage', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        concert: {
          __typename: 'ConcertRecord',
          _createdAt: '2023-09-24T17:30:44+02:00',
          _firstPublishedAt: '2023-09-24T17:30:44+02:00',
          _publishedAt: '2023-09-24T17:30:44+02:00',
          _updatedAt: '2023-09-24T17:30:44+02:00',
          id: '201835035',
          title: 'another concert',
          slug: 'another-concert',
          locations: [],
          program: [],
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
      },
      operation: {
        key: 1,
        query: GetEventPageDocument,
        variables: {},
        kind: 'query',
        context: {
          url: 'https://current--vandiessen-mono.apollographos.net/graphql',
          requestPolicy: 'cache-first',
        },
      },
      stale: false,
      hasNext: false,
    })
    const { data } = await getEventPage({ slug: 'another-concert' })
    expect(data).toEqual({
      content: undefined,
      id: '201835035',
      image: undefined,
      locations: [],
      persons: [],
      program: [],
      title: 'another concert',
      url: '/concerten/another-concert',
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventPage({ slug: 'another-concert' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
