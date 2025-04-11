import React from 'react'
import { EventListItem } from '../eventListItem'
import { getEvent } from '@mono/data'

export interface Props {
  className?: string
  id: string
  size?: 'small' | 'large'
  isLast?: boolean
}

export const Event = async ({
  className,
  id,
  size = 'small',
  isLast,
}: Props) => {
  const { data } = await getEvent({ id })
  if (!data) return null

  return (
    <EventListItem
      className={className}
      data={data}
      size={size}
      isLast={isLast}
    />
  )
}
