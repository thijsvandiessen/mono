import { useEffect, useState } from 'react'
import { getEventsMeta } from '@mono/data'

export const useEventsMeta = () => {
  const [numberOfEvents, setNumberOfEvents] = useState<number>(0)

  useEffect(() => {
    async function getData() {
      const { data } = await getEventsMeta()
      if (!data?.count) return
      setNumberOfEvents(data.count)
    }
    getData()
  }, [])

  return { numberOfEvents }
}
