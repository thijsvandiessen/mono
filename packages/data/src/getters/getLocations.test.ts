import { GetLocationsDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getLocations } from './getLocations.js'
import { describe, expect, it, vi } from 'vitest'

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
describe('getLocations', () => {
  it('should return an object if an id is received', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        allLocations: [
          {
            id: 'some-id',
          },
        ],
      },
      operation: {
        key: 1,
        query: GetLocationsDocument,
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
    const { data } = await getLocations({ skip: 0, first: 1 })
    expect(data).toEqual([
      {
        id: 'some-id',
        address: null,
        lat: null,
        lng: null,
        title: null,
        startTime: null,
        ticketLink: null,
      },
    ])
  })

  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getLocations({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })

  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getLocations({ skip: 0, first: 1 })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
