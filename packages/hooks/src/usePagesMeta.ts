import { useEffect, useState } from 'react'
import { getPagesMeta } from '@mono/graphql'

export const usePagesMeta = () => {
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>()

  useEffect(() => {
    async function getData() {
      const { data } = await getPagesMeta()
      if (!data?.count) return
      setNumberOfPages(data.count)
    }
    getData()
  }, [])

  return { numberOfPages }
}
