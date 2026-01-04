import type { GetPageSeoQuery } from '../../generated/graphql.js'

export const mockData: GetPageSeoQuery['page'] = {
  __typename: 'PageRecord',
  title: 'some title',
  _createdAt: 'some-date-time-string',
  _updatedAt: 'some-date-time-string',
  _firstPublishedAt: 'some date time string',
  _publishedAt: 'some date time string',
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
