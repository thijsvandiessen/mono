import type { SubmenuItemFragment } from '../generated/graphql'
import type { TypedDocumentNode } from '@urql/core'
import { gql } from '@urql/core'
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
