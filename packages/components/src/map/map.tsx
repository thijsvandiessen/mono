'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React, { useCallback, useId } from 'react'

interface Pin {
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

  const onLoad = useCallback(
    (googleMap: google.maps.Map) => {
      async function initMap(): Promise<void> {
        //  Request the needed libraries.
        const { AdvancedMarkerElement } = await Promise.resolve(
          google.maps.importLibrary(
            'marker'
          ) as Promise<google.maps.MarkerLibrary>
        )

        const map = new google.maps.Map(googleMap.getDiv(), {
          zoom: 14,
          center: { lat: pin.lat, lng: pin.lng },
          mapId,
        })

        // Set map options.
        map.setOptions({
          mapTypeControl: false,
        })

        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: pin.lat, lng: pin.lng },
          title: pin.title,
        })

        const infoWindow = new google.maps.InfoWindow({
          ariaLabel: `${pin.title} - ${pin.description}`,
        })

        marker.addListener('click', () => {
          infoWindow.close()
          infoWindow.setHeaderContent(pin.title)
          infoWindow.setContent(pin.description)
          infoWindow.open(marker.map, marker)
        })
      }

      initMap()
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
      id={mapId}
      mapContainerStyle={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      onLoad={onLoad}
      center={{
        lat: pin.lat,
        lng: pin.lng,
      }}
    />
  )
}
