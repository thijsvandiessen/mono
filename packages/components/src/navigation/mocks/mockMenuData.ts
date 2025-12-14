import type { NavigationData } from '@mono/data'

export const mockMenuData: NavigationData = {
  id: '187236701',
  title: 'algemene info',
  menu: [
    {
      id: '187236699',
      label: 'contact',
      slug: 'contact',
    },
    {
      id: '187236700',
      label: 'homepage',
      slug: 'homepage',
    },
    {
      id: '194164583',
      label: 'level 1',
      items: [
        {
          id: '194164581',
          label: 'level 2 - contact',
          slug: 'contact',
        },
        {
          id: '194164582',
          label: 'level 2 - specific page',
          slug: 'specific/page',
        },
      ],
    },
  ],
}
