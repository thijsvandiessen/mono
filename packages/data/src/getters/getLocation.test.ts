import { GetLocationDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getLocation } from './getLocation.js'

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
      address: undefined,
      lat: undefined,
      lng: undefined,
      title: undefined,
    })
  })
  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getLocation({ id: 'test' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
