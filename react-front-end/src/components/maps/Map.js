import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl';   // eslint-disable-line import/no-webpack-loader-syntax
// import makePhotosWithGeoData from '../../helpers/dataHelpers';  //helper to format geodata

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

// const makePhotosWithGeoData = (arr) => {
//   return (
//     arr.map((photo) => {
//       photo.coordinates = [];
//       photo.coordinates.push(photo.lat)
//       photo.coordinates.push(photo.long)
//       return photo;
//     })
//   )
// }

export default function Map(props) {
  // const fakeImageData = [
  //   {
  //       "id": 1,
  //       "photo_text": "welcome to Italia!!",
  //       "date": "2018-02-12T16:01:00.000Z",
  //       "lat": "9.67856000",
  //       "long": "44.13700000",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/IMG_0519.JPG?alt=media&token=79ad7b68-d9e8-42dc-89cc-72a3f5dae374",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "9.67856000",
  //           "44.13700000"
  //       ]
  //   },
  //   {
  //       "id": 2,
  //       "photo_text": "Wow",
  //       "date": "2018-02-14T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/IMG_0503.JPG?alt=media&token=bba8f2b2-719e-4857-ad5d-58a3a2d496f8",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "11.27934970",
  //           "43.82745460"
  //       ]
  //   },
  //   {
  //       "id": 3,
  //       "photo_text": "will i ever get tired of pizza?",
  //       "date": "2018-02-18T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/big-dodzy-uROkgCZO1H0-unsplash.jpg?alt=media&token=87def45d-006a-42d8-9591-527ab38dff12",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "13.3273018",
  //           "43.4898676"
  //       ]
  //   },
  //   {
  //       "id": 7,
  //       "photo_text": "some text about a picture",
  //       "date": "2018-02-18T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/3156_113995240096_4579100_n.jpg?alt=media&token=1e07b4bd-bbdf-4480-8bcf-5d2bff7876d7",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "12.27934970",
  //           "43.62745460"
  //       ]
  //   },
  //   {
  //       "id": 8,
  //       "photo_text": "some text about a picture",
  //       "date": "2018-02-18T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/la-so-vk4vjTNVrTg-unsplash.jpg?alt=media&token=c16309cf-e0f2-4c26-be0e-47522c388b09",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "10.27934970",
  //           "43.12745460"
  //       ]
  //   },
  //   {
  //       "id": 11,
  //       "photo_text": "some text about a picture",
  //       "date": "2018-02-18T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/samuel-ferrara-uNvgvo2cs7k-unsplash.jpg?alt=media&token=8b8396f5-c6c7-4985-83bc-3cc66b930938",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "12.27934970",
  //           "42.82745460"
  //       ]
  //   },
  //   {
  //       "id": 12,
  //       "photo_text": "some text about a picture",
  //       "date": "2018-02-18T16:01:00.000Z",
  //       "lat": "11.27934970",
  //       "long": "43.82745460",
  //       "photo_url": "https://firebasestorage.googleapis.com/v0/b/trpstr-424aa.appspot.com/o/moon-rainbow-sky-art-cred-Favim.com-3154717.jpg?alt=media&token=66976622-14b0-4e69-b340-927ac535f081",
  //       "trip_id": 1,
  //       "coordinates": [
  //           "13.27934970",
  //           "43.82745460"
  //       ]
  //   }
  // ]
  
  // const geoPhotos = makePhotosWithGeoData(fakeImageData);
  const mapContainer = useRef(null);
  
  useEffect(() => {

    // Initialize map when component mounts =
    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        // center: fakeImageData[0].coordinates,
        center: [ "9.67856000", "44.13700000" ],
        zoom: 4
      });

    
    // Create default markers
    // fakeImageData.map((img) =>
    //   new mapboxgl.Marker().setLngLat(img.coordinates).addTo(map)
    // );


    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
    <div ref={mapContainer} className="map-container" />
    </div>
  )
}
