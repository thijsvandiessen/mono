import type { Location } from '@mono/datocms'
import React from 'react'

export interface Props {
  data: Location
}

export const LocationView = ({ data }: Props) => {
  const { title, address, startTime } = data
  return (
    <address>
      <h2>{title}</h2>
      {address && <p>{address}</p>}
      {startTime && <p>{new Date(startTime).toDateString()}</p>}
    </address>
  )
}
