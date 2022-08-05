import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";
import classes from "./ImageGrid.module.css";

const ProgressBar = ({ file, setFile, setStoredUrl }) => {
  const { url, progress } = useStorage(file);

  const params = useParams();
  const trip_id = params.trip_id;

  async function updateDb(url, trip_id) {

   const newImage = {
      photo_text: "some text about a picture",
      date: '2018-02-18T08:01:00.000Z'  ,
      lat: 11.2793497,
      long: 43.8274546,
      photo_url: url,
      trip_id: trip_id  
    };

   const response = await fetch("/api/photos/new", {
    method: "POST",
    body: JSON.stringify(newImage),
    headers: { "Content-Type": "application/json" }
    });

    console.log("response:", response);
  }



  useEffect(() => {
    if (url) {
      setFile(null);
      setStoredUrl(url);
      updateDb(url, trip_id)
    }
  }, [url, setFile ]);





  return <motion.div className={classes.progressbar}
  initial={{ width: 0 }}
  animate={{ width: progress + "%"}}
  ></motion.div>;
};

export default ProgressBar;
