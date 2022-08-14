import EXIF from 'exif-js';

const getExif = async (file) => {

  const coords = [];
  let latitude = 0;
  let longitude = 0;

  await EXIF.getData(file, async function () {
    var exifData = EXIF.pretty(this);
    if (exifData) {
      // All EXIF Data
      console.log('exif data found' );

      // Long and Lat Reference Values (N, S, E, W)
      // These determine whether the long and lat values will be negative or positive
      const refLong = EXIF.getTag(this, 'GPSLongitudeRef');
      const refLat = EXIF.getTag(this, 'GPSLatitudeRef');
      // console.log('Long Ref', refLong);
      // console.log('Lat Ref', refLat);

      const rawLatData = EXIF.getTag(this, 'GPSLatitude');
      const firstNum = rawLatData[0].valueOf();
      const secondNum = rawLatData[1].valueOf();
      const thirdNum = rawLatData[2].valueOf();
      // If latitude reference is South then the latitude value should be negative
      if (refLong === "S") {
        latitude = -1 * firstNum + secondNum / 60 + thirdNum / 3600;
      } else {
        latitude = firstNum + secondNum / 60 + thirdNum / 3600;
      }
      // console.log('Latitude in decimals:', latitude);
      coords.push(latitude);

      const rawLongData = EXIF.getTag(this, 'GPSLongitude');
      const longFirstNum = rawLongData[0].valueOf();
      const longSecondNum = rawLongData[1].valueOf();
      const longThirdNum = rawLongData[2].valueOf();
      // If longitude reference is West then the longitude value should be negative
      if (refLong === "W") {
        longitude = -1 * longFirstNum + longSecondNum / 60 + longThirdNum / 3600;
      } else {
        longitude = longFirstNum + longSecondNum / 60 + longThirdNum / 3600;
      }
      // console.log('Longitude in decimals:', longitude);
      coords.push(longitude);
    } else {
      console.log("No EXIF data found in image '" + file.name + "'.");
      }
  })
  console.log("returning exif coords:", coords);
  return coords;
}




export default getExif; 