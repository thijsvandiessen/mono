'use client'
import type { Location } from '@mono/data'
import { Map } from '../map/index.js'
import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  data: Location
  googleMapsApiKey: string
}

export const LocationDetailView = ({ data, googleMapsApiKey }: Props) => {
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
            description: address ?? '',
            lat,
            lng,
          }}
          googleMapsApiKey={googleMapsApiKey}
          dimensions={{
            width: '100%',
            height: '400px',
          }}
        />
      ) : null}
    </address>
  )
}
