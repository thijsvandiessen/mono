"use client";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo } from "react";
import { initMap } from "./initMap.js";

export interface Pin {
  lat: number;
  lng: number;
  title: string;
  description: string;
}

interface Dimensions {
  width: string; // css unit
  height: string; // css unit
}

export interface Props {
  id: string;
  pin: Pin;
  googleMapsApiKey: string;
  // Cloud-console Map ID. Required by AdvancedMarkerElement; falls back to
  // Google's demo id, which is watermarked and meant for development only.
  mapId?: string;
  dimensions: Dimensions;
}

export const Map = ({ id, pin, googleMapsApiKey, mapId, dimensions }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id,
    googleMapsApiKey,
  });

  // Passed to the Map constructor, so it has to keep a stable identity.
  const options = useMemo<google.maps.MapOptions>(
    () => ({
      mapId: mapId ?? "DEMO_MAP_ID",
      mapTypeControl: false,
    }),
    [mapId],
  );

  if (!isLoaded)
    return (
      <div
        style={{
          width: dimensions.width,
          height: dimensions.height,
          background: "lightgray",
        }}
      />
    );

  return (
    <GoogleMap
      id={id}
      mapContainerStyle={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      options={options}
      zoom={14}
      onLoad={(map) => initMap({ googleMap: map, pin })}
      center={{
        lat: pin.lat,
        lng: pin.lng,
      }}
    />
  );
};
