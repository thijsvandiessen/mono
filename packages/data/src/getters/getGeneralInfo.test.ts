import { describe, expect, it, vi } from 'vitest'
import { GetGeneralInfoDocument } from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { getGeneralInfo } from './getGeneralInfo.js'

vi.mock('../gqlClient.js', () => {
  const originalModule =
    vi.importActual<typeof import('../gqlClient.js')>('../gqlClient.js')
  return {
    __esModule: true,
    ...originalModule,
    client: {
      query: vi.fn(),
    },
  }
})

const mockedQuery = vi.mocked(client.query)
describe('getGeneralInfo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {
        general: { id: '1', title: 'main', menu: [] },
      },
      operation: {
        key: 1,
        query: GetGeneralInfoDocument,
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
    const { data } = await getGeneralInfo()
    expect(data).toEqual({ id: '1', title: 'main', menu: [] })
  })
  it('should return an error', async () => {
    console.log = vi.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getGeneralInfo()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
