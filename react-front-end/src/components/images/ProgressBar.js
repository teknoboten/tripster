import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./ProgressBar.module.css";
import axios from "axios";

// EXIF to get image long and lat coordinates
import EXIF from 'exif-js';

const ProgressBar = ({ file, setFile, setStoredUrl, trip, setTrip }) => {
  const { url, progress } = useStorage(file);
  console.log(progress);

  const params = useParams();
  const trip_id = params.tripId;

  async function updateDb(url, trip_id, file) {
    console.log(trip_id);

    let latitude = 0;
    console.log('Before');
    await EXIF.getData(file, async function () {
      var exifData = EXIF.pretty(this);
      if (exifData) {
        const a = EXIF.getTag(this, 'GPSLatitude');
        const firstNum = a[0].valueOf();
        const secondNum = a[1].valueOf();
        const thirdNum = a[2].valueOf();
        latitude = firstNum + secondNum / 60 + thirdNum / 3600;
        console.log('Latitude in decimals:', latitude);
      } else {
        console.log("No EXIF data found in image '" + file.name + "'.");
      }
      const newImage = {
        photo_text: "Hello world!",
        date: "2018-02-18T08:01:00.000Z",
        lat: latitude,
        long: 43.8274546,
        photo_url: url,
        trip_id: trip_id,
      };
      console.log('newImage:', newImage);

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
    console.log('After');
  }

  useEffect(() => {
    if (url) {
      setFile(null);
      setStoredUrl(url);
      updateDb(url, trip_id, file);
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
