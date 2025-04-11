import type {
  GetGeneralInfoQuery,
  GetGeneralInfoQueryVariables,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { generalInfo } from '../fragments/generalInfo'

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
