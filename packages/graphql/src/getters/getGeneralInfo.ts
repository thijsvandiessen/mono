import { client } from '../gqlClient'
import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql'
import type { CombinedError } from '@urql/core'

export const getGeneralInfo = async (): Promise<
  | {
      data: GetGeneralInfoQuery | undefined
      error: CombinedError | undefined
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
