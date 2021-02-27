import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet/dist/leaflet.css'

export default function Map({center,zoom}) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}
        style={{ width: '100%', height: '600px' }}
        >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
        </div>
    )
}


