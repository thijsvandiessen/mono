import React from 'react'
import { getLocation } from '@crea/graphql/src/getters/getLocation'
import type { Location } from '@crea/graphql/src/types/location'

export interface LocationProps {
  id: string
}

export const useLocation = ({ id }: LocationProps) => {
  const [location, setLocation] = React.useState<Location | null>(null)

  React.useEffect(() => {
    async function getData() {
      const { data } = await getLocation({ id })
      setLocation(data)
    }
    getData()
  }, [id])

  return location
}
