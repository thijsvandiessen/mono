import type {
  GeneralInfoFragment,
  MenuItemFragment,
  SubmenuItemFragment,
} from '../generated/graphql.js'
import type {
  Navigation,
  NavigationItem,
  NavigationSubMenu,
} from '../types/navigation.js'

const navigationItemFormatter = (
  item: MenuItemFragment,
): NavigationItem => ({
  id: item.id,
  label: item.label ?? undefined,
  slug: item.link?.slug ?? undefined,
})

const navigationSubMenuFormatter = (
  item: SubmenuItemFragment,
): NavigationSubMenu => ({
  id: item.id,
  label: item.label ?? undefined,
  items: item.menu.map((sub) => navigationItemFormatter(sub)),
})

export const navigationFormatter = (
  general: GeneralInfoFragment,
): Navigation => ({
  id: general.id,
  title: general.title ?? undefined,
  menu: general.menu.map((item) => {
    if ('menu' in item) {
      return navigationSubMenuFormatter(item)
    }
    return navigationItemFormatter(item)
  }),
})
