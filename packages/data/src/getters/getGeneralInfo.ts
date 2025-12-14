import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql.js'
import type { CombinedError } from '@urql/core'
import type { NavigationData } from '../types/navigation.js'
import { client } from '../gqlClient.js'
import { navigationFormatter } from '../formatters/navigationFormatter.js'

export const getGeneralInfo = async (): Promise<{
  data: NavigationData
  error: CombinedError | unknown
}> => {
  try {
    const { data, error } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    return {
      data: navigationFormatter(data?.general ?? undefined),
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: navigationFormatter(), error }
  }
}
