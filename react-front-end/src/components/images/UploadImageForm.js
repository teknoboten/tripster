import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import classes from "./UploadImageForm.module.css";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";

import LocationInputField from './LocationInputField';




const UploadImageForm = ({ trip_id, trip, setTrip }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [storedUrl, setStoredUrl] = useState("");  
  const [coordinates, setCoordinates] = useState(null);
 

  const history = useHistory();
  const location = useInput("");


  const types = ["image/png", "image/jpeg"];

  useEffect(() => {
    //post to the DB
    if (storedUrl !== "") {
      //save storedURL to the db
      // .then()
      history.push(`/trips/${trip_id}`);
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
        <span>+</span>
      </label>

      <LocationInputField placeholder="Location"
        {...location}
        isTyping={location.value !== ""}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />



      <div className={classes.output}>
        {error && <div className={classes.error}>{error} </div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            setStoredUrl={setStoredUrl}
            trip={trip}
            setTrip={setTrip}
            coordinates={coordinates}
          />
        )}


        
        {/* <p>{storedUrl} {trip_id}</p> */}
      </div>
    </form>
  );
};

export default UploadImageForm;
