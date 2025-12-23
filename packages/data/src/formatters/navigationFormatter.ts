import type {
  GeneralInfoFragment,
  MenuItemFragment,
  SubmenuItemFragment,
} from '../generated/graphql.js'
import type {
  NavigationData,
  NavigationItem,
  SubMenuItem,
} from '../types/navigation.js'
import { z } from 'zod'

const navigationItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  slug: z.string(),
})

const navigationSubMenuSchema = z.object({
  id: z.string(),
  label: z.string(),
  items: z.array(navigationItemSchema),
})

const navigationDataSchema = z.object({
  id: z.string().min(1),
  title: z.string().default(''),
  menu: z.array(z.union([navigationItemSchema, navigationSubMenuSchema])),
})

const navigationItemFormatter = (item: MenuItemFragment): NavigationItem => {
  return navigationItemSchema.parse({
    id: item.id,
    label: item.label,
    slug: item.link?.slug,
  })
}

const navigationSubMenuFormatter = (item: SubmenuItemFragment): SubMenuItem => {
  return navigationSubMenuSchema.parse({
    id: item.id,
    label: item.label,
    items: item.menu.map((sub) => navigationItemFormatter(sub)),
  })
}

export const navigationFormatter = (
  general?: GeneralInfoFragment
): NavigationData => {
  return navigationDataSchema.parse({
    id: general?.id,
    title: general?.title ?? '',
    menu: general?.menu
      ? general.menu.map((item: MenuItemFragment | SubmenuItemFragment) => {
          if ('menu' in item) {
            return navigationSubMenuFormatter(item)
          }
          return navigationItemFormatter(item)
        })
      : [],
  })
}
