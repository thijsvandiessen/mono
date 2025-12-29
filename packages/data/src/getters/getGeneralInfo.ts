import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql.js'
import type { DocumentInput } from '@urql/core'
import type { NavigationData } from '../types/navigation.js'
import { client } from '../gqlClient.js'
import { navigationFormatter } from '../formatters/navigation/navigation.js'

const emptyNavigation: NavigationData = {
  id: '',
  title: '',
  menu: [],
}

const getGeneralInfoDocument: DocumentInput<
  GetGeneralInfoQuery,
  GetGeneralInfoQueryVariables
> = GetGeneralInfoDocument

export const getGeneralInfo = async (): Promise<{
  data: NavigationData
}> => {
  try {
    const { data } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(getGeneralInfoDocument, {})

    if (!data?.general) {
      return { data: emptyNavigation }
    }

    return {
      data: navigationFormatter(data.general),
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: emptyNavigation }
  }
}
