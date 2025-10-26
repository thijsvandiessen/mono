import { GetEventsUrlsDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getEventUrls } from './getEventUrls.js'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../gqlClient.js', () => {
  const originalModule =
    vi.importActual<typeof import('../gqlClient.js')>('../gqlClient.js')
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
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventUrls({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
