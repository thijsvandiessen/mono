import { type TypedDocumentNode, gql } from '@urql/core'
import type { GeneralInfoFragment } from '../generated/graphql'
import { menuItem } from './menuItem'
import { submenuItem } from './subMenuItem'

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
