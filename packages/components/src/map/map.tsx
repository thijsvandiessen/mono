'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React, { useId } from 'react'
import { initMap } from './initMap.js'

export interface Pin {
  lat: number
  lng: number
  title: string
  description: string
}

interface Dimensions {
  width: string // css unit
  height: string // css unit
}

export interface Props {
  id: string
  pin: Pin
  googleMapsApiKey: string
  dimensions: Dimensions
}

export const Map = ({ id, pin, googleMapsApiKey, dimensions }: Props) => {
  const mapId = useId()
  const { isLoaded } = useJsApiLoader({
    id,
    googleMapsApiKey,
  })

  if (!isLoaded)
    return (
      <div
        style={{
          width: dimensions.width,
          height: dimensions.height,
          background: 'lightgray',
        }}
      />
    )

  return (
    <GoogleMap
      id={mapId}
      mapContainerStyle={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      onLoad={(map) => initMap({ googleMap: map, pin, mapId })}
      center={{
        lat: pin.lat,
        lng: pin.lng,
      }}
    />
  )
}
