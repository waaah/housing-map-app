'use client'
import { getHouses } from "@/services/houses";
import { HouseData } from "@/types/house.data.type";
import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles'
import { Icon } from "leaflet";
import { APP_CONFIG } from "../../../app.config";

export default function Map() {
  const [houses, setHouses] = useState<HouseData[]>([]);

  const housingIcon = new Icon({
    iconUrl: APP_CONFIG.DEFAULT.ICONS.HOUSE,
    iconSize: [45, 45], // size of the icon
  })

  useEffect(() => {
    setHouses(getHouses());
  }, [])

  return <MapContainer center={APP_CONFIG.DEFAULT.LOCATION} zoom={13} scrollWheelZoom={true} className="w-full h-full  rounded-lg">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerClusterGroup>
      {
        houses && houses.map((house, key) => {
          return <Marker icon={housingIcon} key={key} position={{ lat: house.latitude, lng: house.longitude }}>
            <Popup>
              {house.description}
            </Popup>
          </Marker>
        })
      }
    </MarkerClusterGroup>
  </MapContainer>
}