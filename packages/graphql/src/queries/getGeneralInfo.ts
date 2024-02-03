import { gql } from '@urql/core'
import { generalInfo } from '../fragments/generalInfo'

export const GET_GENERAL_INFO = gql`
  query getGeneralInfo {
    general {
      ...generalInfo
    }
  }
  ${generalInfo}
`
