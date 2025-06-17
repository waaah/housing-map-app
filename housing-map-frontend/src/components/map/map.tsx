'use client'
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={true} className="w-full h-full">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
}