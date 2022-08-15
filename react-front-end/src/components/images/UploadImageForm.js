import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import classes from "./UploadImageForm.module.css";
import useStorage from "../../hooks/useStorage";
import { useHistory } from "react-router-dom";
import useInput from "../../hooks/useInput";
// import axios from "axios";

// Font Awesome Icon for Upload Image
// https://fontawesome.com/icons/square-plus?s=solid
// React Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Individual Icon
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import getExif from '../../helpers/getExif';
// import useExif from "../../hooks/useStorage";

import LocationInputField from './LocationInputField';
// import SaySomethingInput from "./SaySomethingInput";
import ImagePreview from "./ImagePreview";


const UploadImageForm = ({ trip, setTrip, url, setUrl, exifCoords, setExifCoords, coordinates, setCoordinates }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const location = useInput("");

  const types = ["image/png", "image/jpeg"];


  const { url: firebaseUrl, progress } = useStorage(file);


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

    //scan new photos for existing exif data
    const exif = await getExif(selected);
    console.log("exif:", exif);
    setCoordinates(exif);
  };

  //passes url from firebase to upload modal 
  useEffect(() => {
    if (firebaseUrl) {
      setUrl(firebaseUrl);
    }
  }, [firebaseUrl]);


  return (
    <form className={classes.form}>
      <label className={classes.imageLabel}>
        <input type="file" onChange={changedImgHandler} />
        {/* <span>Select image...</span> */}
        <span className="classes.uploadImage"><FontAwesomeIcon icon={faSquarePlus} /> Select Image</span>
      </label>


      <div className={classes.output}>
        {error && <div className={classes.error}>{error} </div>}
        {file && <div>{file.name}</div>}
        {/* {file && <ProgressBar setStoredUrl={setStoredUrl} file={file} setFile={setFile} trip={trip} setTrip={setTrip} />} */}
        {file && <ProgressBar progress={progress} />}
      </div>


    </form>


  );
};

export default UploadImageForm;
