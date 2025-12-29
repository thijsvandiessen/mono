import {
  GetSiteMetadataDocument,
  type GetSiteMetadataQuery,
  type GetSiteMetadataQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../index.js'
import { formatSiteMetadata } from '../formatters/siteMetadata/formatSiteMetadata.js'

export const getSiteMetadata = async (): Promise<{
  metadata: ReturnType<typeof formatSiteMetadata>
  error?: unknown | CombinedError
}> => {
  try {
    const { data, error } = await client.query<
      GetSiteMetadataQuery,
      GetSiteMetadataQueryVariables
    >(GetSiteMetadataDocument, {})

    return {
      metadata: formatSiteMetadata(data?.general),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { metadata: formatSiteMetadata(), error }
  }
}
