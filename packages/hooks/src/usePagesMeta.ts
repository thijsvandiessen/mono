import React from 'react'
import { getPagesMeta } from '@mono/graphql/src/getters/getPagesMeta'

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
