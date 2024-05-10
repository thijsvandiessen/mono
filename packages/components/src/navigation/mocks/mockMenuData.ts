import type { GetGeneralInfoQuery } from '@mono/graphql/src/generated/graphql'

export const mockMenuData: GetGeneralInfoQuery = {
  general: {
    id: '187236701',
    title: 'algemene info',
    menu: [
      {
        id: '187236699',
        label: 'contact',
        link: {
          __typename: 'PageRecord',
          _createdAt: 'some date time string',
          _updatedAt: 'some date time string',
          id: 'unique-id',
          slug: 'contact',
        },
      },
      {
        id: '187236700',
        label: 'homepage',
        link: {
          __typename: 'PageRecord',
          _createdAt: 'some date time string',
          _updatedAt: 'some date time string',
          id: 'unique-id',
          slug: 'homepage',
        },
      },
      {
        id: '194164583',
        label: 'level 1',
        menu: [
          {
            id: '194164581',
            label: 'level 2 - contact',
            link: {
              __typename: 'PageRecord',
              _createdAt: 'some date time string',
              _updatedAt: 'some date time string',
              id: 'unique-id',
              slug: 'contact',
            },
          },
          {
            id: '194164582',
            label: 'level 2 - specific page',
            link: {
              __typename: 'PageRecord',
              _createdAt: 'some date time string',
              _updatedAt: 'some date time string',
              id: 'unique-id',
              slug: 'specific/page',
            },
          },
        ],
      },
    ],
  },
}
