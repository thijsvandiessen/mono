import type { Pin } from "./map.jsx";

interface Props {
  googleMap: google.maps.Map;
  pin: Pin;
}

export async function initMap({ googleMap, pin }: Props): Promise<void> {
  //  Request the needed libraries.
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker",
  )) as google.maps.MarkerLibrary;

  const marker = new AdvancedMarkerElement({
    map: googleMap,
    position: { lat: pin.lat, lng: pin.lng },
    title: pin.title,
    gmpClickable: true,
  });

  const infoWindow = new google.maps.InfoWindow({
    ariaLabel: `${pin.title} - ${pin.description}`,
  });

  marker.addEventListener("gmp-click", () => {
    infoWindow.close();
    infoWindow.setHeaderContent(pin.title);
    infoWindow.setContent(pin.description);
    infoWindow.open(googleMap, marker);
  });
}
