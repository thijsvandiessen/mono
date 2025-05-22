export interface NavigationItem {
  id: string
  label?: string | null
  slug?: string | null
}

export interface NavigationSubMenu {
  id: string
  label?: string | null
  items: NavigationItem[]
}

export interface Navigation {
  id: string
  title?: string | null
  menu: Array<NavigationItem | NavigationSubMenu>
}
