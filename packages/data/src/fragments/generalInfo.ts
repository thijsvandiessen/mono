import { type TypedDocumentNode, gql } from '@urql/core'
import type { GeneralInfoFragment } from '../generated/graphql.js'
import { menuItem } from './menuItem.js'
import { submenuItem } from './subMenuItem.js'

export const generalInfo: TypedDocumentNode<GeneralInfoFragment> = gql`
  fragment generalInfo on GeneralRecord {
    id
    title
    menu {
      ... on MenuItemRecord {
        ...menuItem
      }
      ... on SubmenuItemRecord {
        ...submenuItem
      }
    }
  }
  ${menuItem}
  ${submenuItem}
`
