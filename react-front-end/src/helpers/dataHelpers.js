const makePhotosWithGeoData = (photos) => {
  
  const result = photos.map((photo) => {
      photo.coordinates = [];
      photo.coordinates.push(photo.lat)
      photo.coordinates.push(photo.long)
      return photo;
    })
    console.log(result);
    return result;
}

module.exports = makePhotosWithGeoData;


// const makePhotosWithGeoData = (photos) => {
  
//   return (
//     photos.map((photo) => {
//       photo.coordinates = [];
//       photo.coordinates.push(photo.lat)
//       photo.coordinates.push(photo.long)
//       return photo;
//     })
//   )
// }