import React from 'react'
import { getLocation } from '@mono/graphql/src/getters/getLocation'
import { LocationDetailView } from './locationDetailView'

export interface Props {
  id: string
  startTime: string
}

export const LocationDetail = async ({ id, startTime }: Props) => {
  const { data } = await getLocation({ id })
  if (!data) return null

  return <LocationDetailView data={{ ...data, startTime }} />
}
