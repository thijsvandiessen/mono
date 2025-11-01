import type { Pin } from './map.jsx'

interface Props {
  googleMap: google.maps.Map
  pin: Pin
  mapId: string
}

export async function initMap({ googleMap, pin, mapId }: Props): Promise<void> {
  //  Request the needed libraries.
  const { AdvancedMarkerElement } = await Promise.resolve(
    google.maps.importLibrary('marker') as Promise<google.maps.MarkerLibrary>
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
