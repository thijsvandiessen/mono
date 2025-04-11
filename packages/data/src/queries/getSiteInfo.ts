import type {
  GetSiteInfoQuery,
  GetSiteInfoQueryVariables,
} from '../generated/graphql'
import { type TypedDocumentNode, gql } from '@urql/core'
import { seoSettings } from '../fragments/seoSettings'

export const GET_SITE_INFO: TypedDocumentNode<
  GetSiteInfoQuery,
  GetSiteInfoQueryVariables
> = gql`
  query getSiteInfo {
    _site {
      locales
      globalSeo {
        ...seoSettings
      }
    }
  }
  ${seoSettings}
`
