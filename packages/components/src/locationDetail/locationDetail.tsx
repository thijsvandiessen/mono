import { LocationDetailView } from "./locationDetailView.jsx";
import React from "react";
import { getLocation } from "@mono/data";

export interface Props {
  id: string;
  startTime: string;
}

export const LocationDetail = async ({ id, startTime }: Props) => {
  const { data } = await getLocation({ id });
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  if (!data || !googleMapsApiKey) return null;

  return (
    <LocationDetailView
      data={{ ...data, startTime }}
      googleMapsApiKey={googleMapsApiKey}
      mapId={mapId}
    />
  );
};
