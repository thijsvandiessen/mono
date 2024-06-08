import React from 'react'
import { getPagesMeta } from '@mono/graphql'

export const usePagesMeta = () => {
  const [numberOfPages, setNumberOfPages] = React.useState<number | undefined>()

  React.useEffect(() => {
    async function getData() {
      const { data } = await getPagesMeta()
      if (!data?.count) return
      setNumberOfPages(data.count)
    }
    getData()
  }, [])

  return { numberOfPages }
}
