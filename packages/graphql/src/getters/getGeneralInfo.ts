import { client } from '../gqlClient'
import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'

export const getGeneralInfo = async (): Promise<
  | {
      data?: GetGeneralInfoQuery
      error?: CombinedError
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    return {
      data,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
