import { client } from '../gqlClient'
import { GetEventsMetaDocument } from '../generated/graphql'
import { getEventsMeta } from './getEventsMeta'

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

describe('getEventsMeta', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        _allConcertsMeta: {
          count: '186234305',
        },
      },
      operation: {
        key: 1,
        query: GetEventsMetaDocument,
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
    const { data } = await getEventsMeta()
    expect(data).toEqual({ count: '186234305' })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getEventsMeta()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
