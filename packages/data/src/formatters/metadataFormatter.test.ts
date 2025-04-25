import type { GetPageSeoQuery } from '../generated/graphql.js'
import { metadataFormatter } from './metadataFormatter.js'
import { vi, describe, it, expect } from 'vitest'

const mockData: GetPageSeoQuery['page'] = {
  __typename: 'PageRecord',
  title: 'some title',
  _createdAt: 'some-date-time-string',
  _updatedAt: 'some-date-time-string',
  id: 'some-id',
  _seoMetaTags: [
    { attributes: null, content: 'Contact', tag: 'title' },
    {
      attributes: { property: 'og:title', content: 'Contact' },
      content: null,
      tag: 'meta',
    },
    {
      attributes: { name: 'twitter:title', content: 'Contact' },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        name: 'description',
        content: 'Kom in contact met Default title',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        property: 'og:description',
        content: 'Kom in contact met Default title',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        name: 'twitter:description',
        content: 'Kom in contact met Default title',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        property: 'og:image',
        content:
          'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg?auto=format&fit=max&w=1200',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        name: 'twitter:image',
        content:
          'https://www.datocms-assets.com/103931/1692002208-pxl_20230324_183549112.jpg?auto=format&fit=max&w=1200',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: { property: 'og:locale', content: 'nl-NL' },
      content: null,
      tag: 'meta',
    },
    {
      attributes: { property: 'og:type', content: 'article' },
      content: null,
      tag: 'meta',
    },
    {
      attributes: {
        property: 'article:modified_time',
        content: '2023-09-01T12:32:36Z',
      },
      content: null,
      tag: 'meta',
    },
    {
      attributes: { name: 'twitter:card', content: 'summary' },
      content: null,
      tag: 'meta',
    },
  ],
  seo: {
    description: 'Kom in contact met Default title',
    title: 'Contact',
    twitterCard: 'summary',
  },
}

vi.mock('../getters/getSiteMetadata', () => {
  const originalModule = vi.importActual('../getters/getSiteMetadata')
  return {
    __esModule: true,
    ...originalModule,
    getSiteMetadata: vi.fn(() => ({
      metadata: {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
  }
})

describe('metadataFormatter', () => {
  it('should return defaults', async () => {
    const res = await metadataFormatter(undefined, 'some-page')
    expect(res).toEqual({
      alternates: {
        canonical: undefined,
      },
      description: 'Default description',
      // manifest: 'https://example.com/manifest.json', // TODO
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
            url: '', // TODO: not good
            width: 1200,
          },
        ],
        locale: 'nl-NL',
        siteName: 'Default title',
        title: 'Default title',
        type: 'article',
        url: 'https://example.com/some-page',
      },
      title: 'Default title',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Default title',
      },
    })
  })

  it('should return correct homepage values', async () => {
    const res = await metadataFormatter(mockData, 'homepage')
    expect(res).toEqual(
      expect.objectContaining({
        alternates: expect.objectContaining({
          canonical: 'https://example.com',
        }),
        metadataBase: expect.objectContaining({
          host: 'example.com',
          hostname: 'example.com',
          href: 'https://example.com/',
          origin: 'https://example.com',
        }),
        openGraph: expect.objectContaining({
          url: 'https://example.com',
        }),
      })
    )
  })

  it('should return correct page values', async () => {
    const res = await metadataFormatter(mockData, 'some-page')
    expect(res).toEqual({
      alternates: {
        canonical: 'https://example.com/some-page',
      },
      description: 'Kom in contact met Default title',
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
        siteName: 'Contact | Default title',
        title: 'Contact | Default title',
        type: 'article',
        url: 'https://example.com/some-page',
      },
      title: 'Contact | Default title',
      twitter: {
        card: 'summary_large_image',
        description: '',
        images: [''],
        title: 'Contact | Default title',
      },
    })
  })
})
