import type {
  GetSubmenuQuery,
  GetSubmenuQueryVariables,
} from '../generated/graphql.js'
import { type TypedDocumentNode, gql } from '@urql/core'
import { submenuItem } from '../fragments/subMenuItem.js'

export const GET_SUBMENU: TypedDocumentNode<
  GetSubmenuQuery,
  GetSubmenuQueryVariables
> = gql`
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
