import React from "react";
// import useStorage from "../../hooks/useStorage";
// import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  // const { url, progress } = useStorage(file);

  // const params = useParams();
  // const trip_id = params.tripId;

  // async function updateDb(url, trip_id, coordinates) {
    
  //   const newImage = {
  //     photo_text: "Hello world!",
  //     date: "2018-02-18T08:01:00.000Z",
  //     photo_url: url,
  //     trip_id: 1,
  //     coordinates: [ "9.67856000", "44.13700000"]
  //   };

  //   console.log("creating a new image in the db:", newImage);

  //   const response = await fetch("/api/photos", {
  //     method: "POST",
  //     body: JSON.stringify(newImage),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   axios.get(`/api/trips/${trip_id}`).then((result) => {
  //     setTrip(result.data);
  //   });
  //   // console.log(trip.photos);
  //   // console.log("response:", response);
  // }

  // useEffect(() => {
  //   if (url) {
  //     console.log("url:", url)
  //     setFile(null);
  //     setStoredUrl(url);
  //     // updateDb(url, trip_id, coordinates);
  //     updateDb(url);
  //   }
  // }, [url, setFile]);

  return (
    <>
    <motion.div
      className={classes.progressbar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>

    </>
  );
};

export default ProgressBar;







// const ProgressBar = ({ file, setFile }) => {
//   const { url, progress } = useStorage(file);

  // const params = useParams();
  // const trip_id = params.tripId;

  // async function updateDb(url, trip_id, coordinates) {
    
  //   const newImage = {
  //     photo_text: "Hello world!",
  //     date: "2018-02-18T08:01:00.000Z",
  //     photo_url: url,
  //     trip_id: trip_id,
  //     coordinates: coordinates
  //   };

  //   console.log("creating a new image in the db:", newImage);

  //   const response = await fetch("/api/photos", {
  //     method: "POST",
  //     body: JSON.stringify(newImage),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   axios.get(`/api/trips/${trip_id}`).then((result) => {
  //     setTrip(result.data);
  //   });
  //   console.log(trip.photos);
  //   console.log("response:", response);
  // }