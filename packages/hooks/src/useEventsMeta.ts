import React from 'react'
import { getEventsMeta } from '@mono/graphql'

export const useEventsMeta = () => {
  const [numberOfEvents, setNumberOfEvents] = React.useState<
    number | undefined
  >()

  React.useEffect(() => {
    async function getData() {
      const { data } = await getEventsMeta()
      if (!data?.count) return
      setNumberOfEvents(data.count)
    }
    getData()
  }, [])

  return { numberOfEvents }
}
