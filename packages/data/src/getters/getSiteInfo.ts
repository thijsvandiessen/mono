import {
  GetSiteInfoDocument,
  type GetSiteInfoQuery,
  type GetSiteInfoQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../index.js'

export const getSiteInfo = async (): Promise<
  | {
      data?: GetSiteInfoQuery['_site'] | null
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetSiteInfoQuery,
      GetSiteInfoQueryVariables
    >(GetSiteInfoDocument, {})

    return {
      data: data?._site ?? null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
