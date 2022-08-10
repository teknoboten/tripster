import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./ProgressBar.module.css";
import axios from "axios";

const ProgressBar = ({ file, setFile, setStoredUrl, trip, setTrip, coordinates }) => {
  const { url, progress } = useStorage(file);
  console.log(progress);

  const params = useParams();
  const trip_id = params.tripId;

  async function updateDb(url, trip_id, file, coordinates) {
    console.log(trip_id);

    let latitude = 0;
    let longitude = 0;

    await EXIF.getData(file, async function () {
      var exifData = EXIF.pretty(this);
      if (exifData) {
        const rawLatData = EXIF.getTag(this, 'GPSLatitude');
        const firstNum = rawLatData[0].valueOf();
        const secondNum = rawLatData[1].valueOf();
        const thirdNum = rawLatData[2].valueOf();
        latitude = firstNum + secondNum / 60 + thirdNum / 3600;
        console.log('Latitude in decimals:', latitude);

        const rawLongData = EXIF.getTag(this, 'GPSLongitude');
        const longFirstNum = rawLongData[0].valueOf();
        const longSecondNum = rawLongData[1].valueOf();
        const longThirdNum = rawLongData[2].valueOf();
        longitude = longFirstNum + longSecondNum / 60 + longThirdNum / 3600;
        console.log('Longitude in decimals:', longitude);
      } else {
        console.log("No EXIF data found in image '" + file.name + "'.");
      }
      const newImage = {
        photo_text: "Hello world!",
        date: "2018-02-18T08:01:00.000Z",
        lat: latitude,
        long: longitude,
        photo_url: url,
        trip_id: trip_id,
      };

      console.log("creating a new image in the db:", newImage);

      const response = await fetch("/api/photos", {
        method: "POST",
        body: JSON.stringify(newImage),
        headers: { "Content-Type": "application/json" },
      });

      axios.get(`/api/trips/${trip_id}`).then((result) => {
        setTrip(result.data);
      });
      console.log(trip.photos);
      console.log("response:", response);
    });

  }

  useEffect(() => {
    if (url) {
      setFile(null);
      setStoredUrl(url);
      updateDb(url, trip_id, coordinates, file);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className={classes.progressbar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
