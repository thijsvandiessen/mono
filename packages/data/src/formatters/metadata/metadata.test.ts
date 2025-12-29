import { describe, expect, it } from 'vitest'
import { metadataFormatter } from './metadata.js'
import { mockData } from './mockData.js'

describe('metadataFormatter', () => {
  it('should return defaults', () => {
    const res = metadataFormatter(
      undefined,
      {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
        socials: [],
      },
      'some-page'
    )
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

  it('should return correct homepage values', () => {
    const res = metadataFormatter(
      mockData,
      {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
        socials: [],
      },
      'homepage'
    )
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

  it('should return correct page values', () => {
    const res = metadataFormatter(
      mockData,
      {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
        socials: [],
      },
      'some-page'
    )
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
