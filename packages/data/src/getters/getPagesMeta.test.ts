import { GetPagesMetaDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getPagesMeta } from './getPagesMeta.js'
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

describe('getPagesMeta', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        _allPagesMeta: {
          __typename: 'CollectionMetadata',
          count: 10,
        },
      },
      operation: {
        key: 1,
        query: GetPagesMetaDocument,
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
    const { data } = await getPagesMeta()
    expect(data).toEqual({
      __typename: 'CollectionMetadata',
      count: 10,
    })
  })

  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPagesMeta()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
