"use client"

import "leaflet/dist/leaflet.css"

import { Icon } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

// Sample crime locations
const crimeLocations = [
  {
    position: [51.505, -0.09],
    title: "Theft",
    description: "Vehicle break-in reported",
  },
  {
    position: [51.51, -0.1],
    title: "Vandalism",
    description: "Property damage in public area",
  },
  {
    position: [51.515, -0.09],
    title: "Assault",
    description: "Physical altercation between individuals",
  },
]

export default function Map({ className }: { className?: string }) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className={className}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {crimeLocations.map((crime, index) => (
        <Marker key={index} position={crime.position as [number, number]} icon={customIcon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">{crime.title}</h3>
              <p className="text-sm text-muted-foreground">{crime.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

