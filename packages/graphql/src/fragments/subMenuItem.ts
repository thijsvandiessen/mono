import { gql } from '@urql/core'
import { menuItem } from './menuItem'
import type { TypedDocumentNode } from '@urql/core'
import type { SubmenuItemFragment } from '../generated/graphql'

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
