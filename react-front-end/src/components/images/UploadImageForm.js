import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import classes from "./UploadImageForm.module.css";
import useStorage from "../../hooks/useStorage";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";
import axios from "axios";

import LocationInputField from './LocationInputField';
import SaySomethingInput from "./SaySomethingInput";
import ImagePreview from "./ImagePreview";


const UploadImageForm = ({ trip, setTrip }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [storedUrl, setStoredUrl] = useState("");  
  const [coordinates, setCoordinates] = useState(null);
  const [photoText, setPhotoText] = useState("");

  const history = useHistory();
  const location = useInput("");

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

  const types = ["image/png", "image/jpeg"];

  useEffect(() => {
    if (storedUrl !== "") {
      history.push(`/trips/${trip.id}`);
    }
  }, [storedUrl]);


  const changedImgHandler = (e) => {
    let selected = e.target.files[0];

    //------ Existing validation ------
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError(`please select an image file (png or jpg)`);
    }
  };

  return (
    <form className={classes.form}>
      <label className={classes.imageLabel}>
        <input type="file" onChange={changedImgHandler} />
        <span>Select an image to add</span>
      </label>

      
      {/* <LocationInputField placeholder="Location"
        {...location}
        isTyping={location.value !== ""}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      /> */}
      

      <SaySomethingInput photoText={photoText} setPhotoText={setPhotoText}></SaySomethingInput>

      <div className={classes.output}>
        {error && <div className={classes.error}>{error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar setStoredUrl={setStoredUrl} file={file} setFile={setFile} trip={trip} setTrip={setTrip}/>}


        
      </div>
    </form>
  );
};

export default UploadImageForm;
