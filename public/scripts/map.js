
mapboxgl.accessToken = process.env.MBAC;

console.log("hello!")
console.log(process.env.MBAC)

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [45.9, -112], // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: 'globe' // display the map as a 3D globe
  });
  map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
  });


  map.on('load', () => {
    // Add an image to use as a custom marker
    map.loadImage(
    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
    (error, image) => {
    if (error) throw error;
    map.addImage('custom-marker', image);
    // Add a GeoJSON source with 2 points
    map.addSource('points', {
    'type': 'geojson',
    'data': {
    'type': 'FeatureCollection',
    'features': [
    {
    // feature for Mapbox DC
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [
    -77.03238901390978, 38.913188059745586
    ]
    },
    'properties': {
    'title': 'Mapbox DC'
    }
    },
    {
    // feature for Mapbox SF
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [-122.414, 37.776]
    },
    'properties': {
    'title': 'Mapbox SF'
    