import { GetAuthorsMetaDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getAuthorsMeta } from './getAuthorsMeta'

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

describe('getAuthorsMeta', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        _allPeopleMeta: {
          count: '186234305',
        },
      },
      operation: {
        key: 1,
        query: GetAuthorsMetaDocument,
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
    const { data } = await getAuthorsMeta()
    expect(data).toEqual({ count: '186234305' })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getAuthorsMeta()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
