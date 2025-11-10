import { describe, expect, it } from 'vitest'
import type { GeneralInfoFragment } from '../generated/graphql.js'
import { navigationFormatter } from './navigationFormatter.js'

describe('navigationFormatter', () => {
  it('should format navigation data', () => {
    const input: GeneralInfoFragment = {
      id: '1',
      title: 'main',
      menu: [
        {
          id: '2',
          label: 'contact',
          link: {
            __typename: 'PageRecord',
            _createdAt: '',
            _updatedAt: '',
            _firstPublishedAt: '',
            _publishedAt: '',
            id: 'p1',
            slug: 'contact',
          },
        },
        {
          id: '3',
          label: 'submenu',
          menu: [
            {
              id: '4',
              label: 'child',
              link: {
                __typename: 'PageRecord',
                _createdAt: '',
                _updatedAt: '',
                _firstPublishedAt: '',
                _publishedAt: '',
                id: 'p2',
                slug: 'child',
              },
            },
          ],
        },
      ],
    }

    expect(navigationFormatter(input)).toEqual({
      id: '1',
      title: 'main',
      menu: [
        { id: '2', label: 'contact', slug: 'contact' },
        {
          id: '3',
          label: 'submenu',
          items: [{ id: '4', label: 'child', slug: 'child' }],
        },
      ],
    })
  })
})
