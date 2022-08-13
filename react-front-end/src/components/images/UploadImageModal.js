import React, { useState } from "react";
import { useParams } from "react-router-dom"; 
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from "axios";

// React Bootstrap
import Button from 'react-bootstrap/Button';

import classes from "./UploadImageForm.module.css";
import "./ImageModal.css";

import UploadImageForm from "./UploadImageForm";
// import ProgressBar from "./ProgressBar";
import LocationInputField from "./LocationInputField";
import ImagePreview from "./ImagePreview";
import SaySomethingInput from "./SaySomethingInput";

function UploadImageModal({ onClose, open, trip, setTrip, submit }) {

  const [ coordinates, setCoordinates ] = useState([]);
  const [photoText, setPhotoText] = useState("");
  const [ url, setUrl ] = useState("");
  const [ exifCoords, setExifCoords ] = useState([]);


  const params = useParams();
  const trip_id = params.tripId;

// console.log("exif:", exifCoords);
console.log("coordinates:", coordinates);
console.log("phototext:", photoText);

  return (
    
    <Modal open={open} onClose={onClose} center >

    <div className={classes.newImageContainer} >

   {url ? ( <ImagePreview img={url} />) : <UploadImageForm trip={trip} setTrip={setTrip} url={url} setUrl={setUrl} coordinates={coordinates} setCoordinates={setCoordinates} />}
   {(url && coordinates.length === 0) && <LocationInputField coordinates={coordinates} setCoordinates={setCoordinates}/> }
   {(url && coordinates.length > 0 && <SaySomethingInput photoText={photoText} setPhotoText={setPhotoText}/>) }

    <Button onClick={createNewImageObject} className={classes.btnSubmit}> Submit </Button>
    </div>
    </Modal >
  );

  async function createNewImageObject() {
    
    submit();

    console.log("going to update the db now")

    const newImage = {
      photo_text: photoText,
      date: "2018-02-18T08:01:00.000Z",
      photo_url: url,
      trip_id: trip.id,
      coordinates: coordinates
    };

    console.log(newImage);

    const response = await fetch("/api/photos", {
      method: "POST",
      body: JSON.stringify(newImage),
      headers: { "Content-Type": "application/json" },
    });

    axios.get(`/api/trips/${trip_id}`).then((result) => {
      setTrip(result.data);
    });

  }
}

export default UploadImageModal;
