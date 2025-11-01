import { GetPageDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getPage } from './getPage.js'
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
describe('getPage', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        page: {},
      },
      operation: {
        key: 1,
        query: GetPageDocument,
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
    const { data } = await getPage({ slug: '' })
    expect(data).toEqual({})
  })

  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPage({ slug: '' })
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
