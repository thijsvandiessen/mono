import { gql } from '@urql/core'
import { seoSettings } from '../fragments/seoSettings'

export const GET_SITE_INFO = gql`
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
