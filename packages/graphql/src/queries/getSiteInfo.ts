import { gql } from '@urql/core'
import { seoSettings } from '../fragments/seoSettings'
import type { TypedDocumentNode } from '@urql/core'
import type {
  GetSiteInfoQuery,
  GetSiteInfoQueryVariables,
} from '../generated/graphql'

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
