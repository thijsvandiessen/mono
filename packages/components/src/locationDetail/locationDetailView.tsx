'use client'
import React from 'react'
import { Map } from '../map'
import type { Location } from '@mono/graphql'
import { useEnv } from '@mono/hooks'
import styles from './styles.module.scss'

export interface Props {
  data: Location
}

export const LocationDetailView = ({ data }: Props) => {
  const googleMapsApiKey = useEnv('GOOGLE_MAPS_API_KEY')
  const { title, address, lat, lng } = data

  return (
    <address className={styles.root}>
      <div className={styles.details}>
        <h3 className="h4">{title}</h3>
        {address && <p className={styles.detailsText}>{address}</p>}
      </div>
      {lat && lng && googleMapsApiKey ? (
        <Map
          id="concert-location"
          pin={{
            title: title ?? '',
            lat,
            lng,
          }}
          googleMapsApiKey={googleMapsApiKey}
          dimensions={{
            width: '100%',
            height: '400px',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '400px',
            background: 'lightgray',
          }}
        />
      )}
    </address>
  )
}
