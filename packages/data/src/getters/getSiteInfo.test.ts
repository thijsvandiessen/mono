import { GetSiteInfoDocument } from '../generated/graphql.js'
import { client } from '../index.js'
import { getSiteInfo } from './getSiteInfo.js'

jest.mock('../index', () => {
  const originalModule = jest.requireActual('../index')
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

describe('getSiteInfo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: { _site: {} },
      operation: {
        key: 1,
        query: GetSiteInfoDocument,
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
    const { data } = await getSiteInfo()
    expect(data).toEqual({})
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getSiteInfo()
    expect(data).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
