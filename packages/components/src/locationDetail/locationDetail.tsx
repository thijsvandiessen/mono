import React from 'react'
import { getLocation } from '@mono/data'
import { LocationDetailView } from './locationDetailView'

export interface Props {
  id: string
  startTime: string
}

export const LocationDetail = async ({ id, startTime }: Props) => {
  const { data } = await getLocation({ id })
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  if (!data) return null

  return (
    <LocationDetailView
      data={{ ...data, startTime }}
      googleMapsApiKey={googleMapsApiKey}
    />
  )
}
