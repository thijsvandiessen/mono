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

jest.mock('@mono/graphql/src/getters/getSiteMetadata', () => {
  const originalModule = jest.requireActual(
    '@mono/graphql/src/getters/getSiteMetadata'
  )
  return {
    __esModule: true,
    ...originalModule,
    getSiteMetadata: jest.fn(() => ({
      metadata: {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
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
          url: 'https://current--vandiessen-mono.apollographos.net/graphql',
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
      title: 'Default title',
      description: 'Default description',
      metadataBase: expect.objectContaining({
        host: 'example.com',
        hostname: 'example.com',
        href: 'https://example.com/',
        origin: 'https://example.com',
      }),
      openGraph: {
        description: 'Default description',
        images: [
          {
            height: 900,
            url: '',
            width: 1200,
          },
        ],
        locale: 'nl-NL',
        siteName: 'Default title',
        title: 'Default title',
        type: 'article',
        url: 'https://example.com/',
      },
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Default title',
      },
    })
  })

  it('should return an error', async () => {
    console.log = jest.fn()
    mockedQuery.mockRejectedValue(new Error('error'))
    const { data, error } = await getPageSeo({ slug: '' })
    expect(data).toEqual({
      alternates: { canonical: 'https://example.com/' },
      description: 'Default description',
      metadataBase: expect.objectContaining({
        host: 'example.com',
        hostname: 'example.com',
        href: 'https://example.com/',
        origin: 'https://example.com',
      }),
      openGraph: {
        description: 'Default description',
        images: [{ height: 900, url: '', width: 1200 }],
        locale: 'nl-NL',
        siteName: 'Default title',
        title: 'Default title',
        type: 'article',
        url: 'https://example.com/',
      },
      title: 'Default title',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Default title',
      },
    })
    expect(error).toBeInstanceOf(Error)
    expect(console.log).toHaveBeenLastCalledWith('error')
  })
})
