import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import classes from "./UploadImageForm.module.css";
import useStorage from "../../hooks/useStorage";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";
// import axios from "axios";

import getExif from '../../helpers/getExif';
// import useExif from "../../hooks/useStorage";

import LocationInputField from './LocationInputField';
// import SaySomethingInput from "./SaySomethingInput";
import ImagePreview from "./ImagePreview";


const UploadImageForm = ({ trip, setTrip, url, setUrl, exifCoords, setExifCoords }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  // const [storedUrl, setStoredUrl] = useState("");  
  // const [coordinates, setCoordinates] = useState(null);  

  // const history = useHistory();
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

  // useEffect(() => {
  //   if (storedUrl !== "") {
  //     history.push(`/trips/${trip.id}`);
  //   }
  // }, [storedUrl]);

  const { url:firebaseUrl, progress } = useStorage(file);


  const changedImgHandler = async (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      // getExif(selected);
    } else {
      setFile(null);
      setError(`please select an image file (png or jpg)`);
    }

    const exif = await getExif(selected);
    console.log("exif:", exif);
    setExifCoords(exif)

    // if (exif) {
    //   console.log('i set exifcoords now')
    //   setExifCoords(exif)
    // } else {
    //   setExifCoords(null);
    // }
    // console.log('exifCoords:', exifCoords); 
  };




  useEffect(() => {
    if (firebaseUrl) {
      setUrl(firebaseUrl)
    }
  }, [firebaseUrl])





  return (
    <form className={classes.form}>
      <label className={classes.imageLabel}>
        <input type="file" onChange={changedImgHandler} />
        <span>Choose File</span>
      </label>

      
      {/* <LocationInputField placeholder="Location"
        {...location}
        isTyping={location.value !== ""}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      /> */}
      
      <div className={classes.output}>
        {error && <div className={classes.error}>{error} </div>}
        {file && <div>{file.name}</div>}
        {/* {file && <ProgressBar setStoredUrl={setStoredUrl} file={file} setFile={setFile} trip={trip} setTrip={setTrip} />} */}
        {file && <ProgressBar progress={progress}/>}
      </div>

      
    </form>

    
  );
};

export default UploadImageForm;
