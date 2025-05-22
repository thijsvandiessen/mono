import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import { client } from '../gqlClient.js'
import { navigationFormatter } from '../formatters/navigationFormatter.js'
import type { Navigation } from '../types/navigation.js'

export const getGeneralInfo = async (): Promise<{
  data?: Navigation
  error: CombinedError | unknown
}> => {
  try {
    const { data, error } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    return {
      data: data?.general ? navigationFormatter(data.general) : undefined,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: undefined, error }
  }
}
