import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';   // eslint-disable-line import/no-webpack-loader-syntax
import classes from '../../pages/TripDetailPage.module.css';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;


export default function Map({ photos, handleMarkerClick }) {
  const mapContainer = useRef(null);
  const lastPhoto = photos.length - 1;

  useEffect(() => {
    // Initialize map when component mounts =
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",

      // center: photos[0].coordinates,
      // center: ["9.67856000", "44.13700000"],

      // If NO photos are in the trip then center the map to the entire world, zoomed OUT
      ...(photos.length === 0 && { center: ["9.67856000", "44.13700000"] }),
      ...(photos.length === 0 && { zoom: 0 }),

      // If photos ARE in the trip then center the map to the first photo in the trip, zoomed IN
      ...(photos.length > 0 && { center: photos[lastPhoto].coordinates }),
      ...(photos.length > 0 && { zoom: 10 }),

      //------- NOTE ON ZOOM LEVELS -------
      // https://docs.mapbox.com/help/glossary/zoom-level/
      // zoom level 0 = entire earth
      // zoom level 15 = buildings
    });

    map.on('load', function () {
      map.resize();
    });

    photos.map((img) => {
      // console.log("IMG", img.coordinates);
      new mapboxgl.Marker({
        // color: "#fcb8d2",
        color: "#3b4954",
      })
        .setLngLat(img.coordinates)
        .setPopup(
          // add popups

          new mapboxgl.Popup({ offset: 25 })

            .setHTML(
              `<div>
            <img src="${img.photo_url}" class="thumbnail"/>
            <p>${img.photo_text}</p> 
            </div>
            `
            )
        )
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [photos]);

  return (
    // <div>
    <div ref={mapContainer} className={classes.mapBox} />

    // </div>
  );
}


{/* <div ref={mapContainer} className="map-container" /> */ }