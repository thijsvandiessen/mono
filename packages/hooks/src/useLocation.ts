import { type Location, getLocation } from '@mono/data'
import { useEffect, useState } from 'react'

export interface LocationProps {
  id: string
}

export const useLocation = ({ id }: LocationProps) => {
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(() => {
    async function getData() {
      const { data } = await getLocation({ id })
      setLocation(data)
    }
    getData()
  }, [id])

  return location
}
