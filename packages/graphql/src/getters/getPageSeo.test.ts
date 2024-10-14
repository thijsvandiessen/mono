import { GetPageSeoDocument } from '../generated/graphql'
import { client } from '../gqlClient'
import { getPageSeo } from './getPageSeo'

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

describe('getPageSeo', () => {
  it('should return an object', async () => {
    mockedQuery.mockResolvedValue({
      data: {},
      operation: {
        key: 1,
        query: GetPageSeoDocument,
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
    const { data } = await getPageSeo({ slug: '' })
    expect(data).toEqual({
      alternates: {
        canonical: 'https://example.com/',
      },
      title: '',
      description: '',
      metadataBase: expect.objectContaining({
        host: 'example.com',
        hostname: 'example.com',
        href: 'https://example.com/',
        origin: 'https://example.com',
      }),
      openGraph: {
        description: '',
        images: [
          {
            height: 900,
            url: '',
            width: 1200,
          },
        ],
        locale: 'nl-NL',
        siteName: '',
        title: '',
        type: 'article',
        url: 'https://example.com/',
      },
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: '',
      },
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPageSeo({ slug: '' })
    expect(data).toEqual({
      alternates: { canonical: 'https://example.com/' },
      description: '',
      metadataBase: expect.objectContaining({
        host: 'example.com',
        hostname: 'example.com',
        href: 'https://example.com/',
        origin: 'https://example.com',
      }),
      openGraph: {
        description: '',
        images: [{ height: 900, url: '', width: 1200 }],
        locale: 'nl-NL',
        siteName: '',
        title: '',
        type: 'article',
        url: 'https://example.com/',
      },
      title: '',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: '',
      },
    })
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
