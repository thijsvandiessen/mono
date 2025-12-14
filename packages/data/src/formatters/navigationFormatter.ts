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

const navigationItemFormatter = (item: MenuItemFragment): NavigationItem => ({
  id: item.id,
  label: item.label ?? undefined,
  slug: item.link?.slug ?? undefined,
})

const navigationSubMenuFormatter = (
  item: SubmenuItemFragment
): SubMenuItem => ({
  id: item.id,
  label: item.label ?? undefined,
  items: item.menu.map((sub) => navigationItemFormatter(sub)),
})

export const navigationFormatter = (
  general?: GeneralInfoFragment
): NavigationData => {
  return {
    id: general?.id ?? 'none',
    title: general?.title ?? undefined,
    menu: general?.menu
      ? general.menu.map((item: MenuItemFragment | SubmenuItemFragment) => {
          if ('menu' in item) {
            return navigationSubMenuFormatter(item)
          }
          return navigationItemFormatter(item)
        })
      : [],
  }
}
