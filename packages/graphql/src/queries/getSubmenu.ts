import { gql } from '@urql/core'
import { submenuItem } from '../fragments/subMenuItem'
import type { TypedDocumentNode } from '@urql/core'
import type { GetSubmenuQuery, GetSubmenuQueryVariables } from '../generated/graphql'

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
