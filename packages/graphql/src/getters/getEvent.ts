import { client } from '../gqlClient'
import { eventFormatter } from '../formatters/eventFormatter'
import {
  GetEventDocument,
  type GetEventQuery,
  type GetEventQueryVariables,
} from '../generated/graphql'

export const getEvent = async ({ id }: GetEventQueryVariables) => {
  try {
    const { data, error } = await client.query<
      GetEventQuery,
      GetEventQueryVariables
    >(GetEventDocument, {
      id,
    })

    return {
      data: data?.concert ? eventFormatter(data.concert) : null,
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
