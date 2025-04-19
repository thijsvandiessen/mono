import { GetEventsUrlsDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getEventUrls } from './getEventUrls.js'

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

describe('getEventUrls', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allConcerts: [{}],
      },
      operation: {
        key: 1,
        query: GetEventsUrlsDocument,
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
    const { data } = await getEventUrls({ skip: 0, first: 1 })
    expect(data).toEqual([])
  })
  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventUrls({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
