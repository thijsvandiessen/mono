import { type TypedDocumentNode, gql } from '@urql/core'
import type { SubmenuItemFragment } from '../generated/graphql'
import { menuItem } from './menuItem'

export const submenuItem: TypedDocumentNode<SubmenuItemFragment> = gql`
  fragment submenuItem on SubmenuItemRecord {
    id
    label
    menu {
      ...menuItem
    }
  }
  ${menuItem}
`
