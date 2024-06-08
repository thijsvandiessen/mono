import { gql } from '@urql/core'
import { generalInfo } from '../fragments/generalInfo'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetGeneralInfoQuery,
  GetGeneralInfoQueryVariables,
} from '../generated/graphql'

export const GET_GENERAL_INFO: TypedDocumentNode<
  GetGeneralInfoQuery,
  GetGeneralInfoQueryVariables
> = gql`
  query getGeneralInfo {
    general {
      ...generalInfo
    }
  }
  ${generalInfo}
`
