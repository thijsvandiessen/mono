import { authorFormatter } from '../formatters/authorFormatter'
import { client } from '../gqlClient'
import {
  GetAuthorDocument,
  type GetAuthorQuery,
  type GetAuthorQueryVariables,
} from '../generated/graphql'

export const getAuthor = async ({ id }: GetAuthorQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetAuthorQuery,
      GetAuthorQueryVariables
    >(GetAuthorDocument, { id })

    return {
      data: data?.person ? authorFormatter(data.person) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
