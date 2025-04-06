'use client'
import React, { useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

interface Pin {
  lat: number
  lng: number
  title: string
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
  const { isLoaded } = useJsApiLoader({
    id,
    googleMapsApiKey,
  })

  const onLoad = useCallback(
    (map: google.maps.Map | null | google.maps.StreetViewPanorama) => {
      const marker = new google.maps.Marker({
        position: { lat: pin.lat, lng: pin.lng },
        clickable: Boolean(pin.title),
        map,
        title: pin.title,
      })

      const infoWindow = new google.maps.InfoWindow({
        // ariaLabel: title,
      })

      marker.addListener('click', () => {
        infoWindow.close()
        infoWindow.setContent(marker.getTitle())
        infoWindow.open(marker.getMap(), marker)
      })
    },
    [pin.lat, pin.lng, pin.title]
  )

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
      mapContainerStyle={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      onLoad={onLoad}
      center={{
        lat: pin.lat,
        lng: pin.lng,
      }}
      zoom={14}
    />
  )
}
