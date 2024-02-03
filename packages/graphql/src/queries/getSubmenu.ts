import { gql } from '@urql/core'
import { submenuItem } from '../fragments/subMenuItem'

export const GET_SUBMENU = gql`
  query getSubmenu {
    general {
      menu {
        ... on SubmenuItemRecord {
          ...submenuItem
        }
      }
    }
  }
  ${submenuItem}
`
