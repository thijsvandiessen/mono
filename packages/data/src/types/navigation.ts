export interface NavigationItem {
  id: string
  label?: string
  slug?: string
}

export interface SubMenuItem {
  id: string
  label?: string
  items: NavigationItem[]
}

export interface Navigation {
  id: string
  title?: string
  menu: Array<NavigationItem | SubMenuItem>
}
