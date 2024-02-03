import { client } from '../gqlClient'
import {
  GetPagesMetaDocument,
  type GetPagesMetaQuery,
  type GetPagesMetaQueryVariables,
} from '../generated/graphql'

export const getPagesMeta = async () => {
  try {
    const { data, error } = await client.query<
      GetPagesMetaQuery,
      GetPagesMetaQueryVariables
    >(GetPagesMetaDocument, {})

    return { data: data?._allPagesMeta ?? null, error }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
