import {
  GetSiteMetadataDocument,
  type GetSiteMetadataQuery,
  type GetSiteMetadataQueryVariables,
} from '../generated/graphql.js'
import { client } from '../gqlClient.js'
import { formatSiteMetadata } from '../formatters/formatSiteMetadata.js'

export const getSiteMetadata = async () => {
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
