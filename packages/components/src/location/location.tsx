import { LocationView } from './locationView'
import React from 'react'
import { getLocation } from '@crea/graphql/src/getters/getLocation'

export interface Props {
  id: string
}

export const Location = async ({ id }: Props) => {
  const { data } = await getLocation({ id })
  if (!data) return null

  return <LocationView data={data} />
}
