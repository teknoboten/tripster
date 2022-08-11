import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';   // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export default function Map({ photos }) {


  // const fakeImageData = [
  //   {
  //     "id": 1,
  //     "photo_text": "welcome to Italia!!",
  //     "date": "2018-02-12T16:01:00.000Z",
  //     "lat": "9.67856000",
  //     "long": "44.13700000",
  //     "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/IMG_0519.JPG?alt=media&token=79ad7b68-d9e8-42dc-89cc-72a3f5dae374",
  //     "trip_id": 1,
  //     "coordinates": [
  //       "9.67856000",
  //       "44.13700000"
  //     ]
  //   },
  // ];


  const mapContainer = useRef(null);

  useEffect(() => {

    // Initialize map when component mounts =
    const map = new mapboxgl.Map({
      container: mapContainer.current,

      // Style of the Map
      // https://www.mapbox.com/gallery/
      style: 'mapbox://styles/mapbox/dark-v10',

      // center: photos[0].coordinates,
      // center: ["9.67856000", "44.13700000"],

      // If NO photos are in the trip then center the map to the entire world, zoomed OUT
      ...(photos.length === 0 && { center: ["9.67856000", "44.13700000"] }),
      ...(photos.length === 0 && { zoom: 0 }),

      // If photos ARE in the trip then center the map to the first photo in the trip, zoomed IN
      ...(photos.length > 0 && { center: photos[0].coordinates }),
      ...(photos.length > 0 && { zoom: 6 }),

      //------- NOTE ON ZOOM LEVELS -------
      // https://docs.mapbox.com/help/glossary/zoom-level/
      // zoom level 0 = entire earth
      // zoom level 15 = buildings



    });

    // --------- MAKE MAP POINTS CLICKABLE ---------
    map.on('click', (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['chicago-parks']
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(map);
    });

    // Create default markers
    // trip.photos.map
    // fakeImageData.map((img) =>
    // console.log(props.);
    // photos.map((img) => {
    //   console.log('img:', img);
    //   new mapboxgl.Marker().setLngLat(img.coordinates).addTo(map);
    // }
    // );


    // Map through all photos in the current trip 
    // and plot their coordinates on the map
    photos.map((img) =>
      new mapboxgl.Marker().setLngLat(img.coordinates).addTo(map)
    );




    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, [photos]);





  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
