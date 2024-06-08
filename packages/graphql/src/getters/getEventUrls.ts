import { client } from '../gqlClient'
import {
  ConcertModelOrderBy,
  GetEventsUrlsDocument,
  type GetEventsUrlsQuery,
  type GetEventsUrlsQueryVariables,
} from '../generated/graphql'
import { eventUrlFormatter } from '../formatters/eventUrlFormatter'
import type { PageLink } from '../types/pageLink'
import type { CombinedError } from '@urql/core'

interface Props extends GetEventsUrlsQueryVariables {
  skip: number
  first: number
}

export const getEventUrls = async ({
  skip,
  first,
  order = ConcertModelOrderBy.PositionAsc,
}: Props): Promise<
  | {
      data: PageLink[]
      error: CombinedError | undefined
    }
  | {
      data: null
      error: unknown
    }
> => {
  try {
    const { data, error } = await client.query<
      GetEventsUrlsQuery,
      GetEventsUrlsQueryVariables
    >(GetEventsUrlsDocument, {
      skip,
      first,
      order,
    })

    return {
      data: data?.allConcerts.length ? eventUrlFormatter(data.allConcerts) : [],
      error,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null, error }
  }
}
