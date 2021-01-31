import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import { circleDataOnMap } from '../../helpers/util';

function WorldMap({ countries, casesType, center, zoom }) {
  const [map, setMap] = useState(null);
  if (map) {
    map.flyTo(center);
  }
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        whenCreated={setMap}
        maxZoom={8}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {circleDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default WorldMap;
