import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { Navigation } from '../types/navigation.js'
import { client } from '../gqlClient.js'
import { navigationFormatter } from '../formatters/navigationFormatter.js'

export const getGeneralInfo = async (): Promise<{
  data: Navigation | null
  error: CombinedError | unknown
}> => {
  try {
    const { data, error } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    return {
      data: data?.general ? navigationFormatter(data.general) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
