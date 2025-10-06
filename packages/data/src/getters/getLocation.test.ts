import { GetLocationDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getLocation } from './getLocation.js'
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

describe('getLocation', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        location: { id: 'some-id' },
      },
      operation: {
        key: 1,
        query: GetLocationDocument,
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
    const { data } = await getLocation({ id: 'test' })
    expect(data).toEqual({
      id: 'some-id',
      address: null,
      lat: null,
      lng: null,
      title: null,
    })
  })
  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getLocation({ id: 'test' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
