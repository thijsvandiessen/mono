import { useEffect, useState } from 'react'

export const useEnv = (
  key: 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY' | 'TEST'
): string | undefined => {
  const [state, setState] = useState<string | undefined>()

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/env?${key}`, {
        // next: { revalidate: 86400, tags: ['env'] },
      })
      const data = await response.json()
      if (!data) return
      if (typeof data !== 'object') return
      if (!Object.hasOwn(data, key)) return
      if (typeof data[key] !== 'string') return
      setState(data[key])
    }

    fetchData()
  }, [key])

  return state
}
