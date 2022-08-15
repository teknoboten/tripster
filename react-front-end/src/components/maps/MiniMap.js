import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';   // eslint-disable-line import/no-webpack-loader-syntax
import classes from './Map.module.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export default function MiniMap({ coordinates }) {

  const mapContainer = useRef(null);

  console.log('i make you a map now')
  useEffect(() => {

    // Initialize map when component mounts =
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 6
    });

      new mapboxgl.Marker({
        color: "#fcb8d2",
      })
    .setLngLat(coordinates)
    .addTo(map)

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [coordinates]);

  return (
    <div>
      <div ref={mapContainer} className="mini-map-container" />
    </div>
  );
}
