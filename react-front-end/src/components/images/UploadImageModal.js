import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import useStorage from "../../hooks/useStorage";
// import { useState } from 'react';
import PhotoDetail from "./PhotoDetail";
import axios from "axios";

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import classes from "./UploadImageForm.module.css";
import "./ImageModal.css";

import UploadImageForm from "./UploadImageForm";
import ProgressBar from "./ProgressBar";
import LocationInputField from "./LocationInputField";
import ImagePreview from "./ImagePreview";
import SaySomethingInput from "./SaySomethingInput";

function NewImageModal({ onClose, open, trip, setTrip }) {

const imageTemplate = {
  photo_text: "",
  date: "",
  photo_url: "",
  trip_id: trip.id,
  coordinates: []
};

  const [ coordinates, setCoordinates ] = useState([]);
  const [photoText, setPhotoText] = useState("");
  const [ url, setUrl ] = useState("");

  const params = useParams();
  const trip_id = params.tripId;
  

  return (
    <Modal open={open} onClose={onClose} center >

    <div className={classes.newImageContainer} >

   {url ? ( <ImagePreview img={url} />) : <UploadImageForm trip={trip} setTrip={setTrip} url={url} setUrl={setUrl}/>}
  {(url && !coordinates) {

  } <LocationInputField coordinates={coordinates} setCoordinates={setCoordinates}/>  )}
      {/* <SaySomethingInput /> */}
    {/* { !coordinates && url ( <LocationInputField /> )} */}

    {/* <LocationInputField /> */}


    {/* {file && (
      <SaySomethingInput />
    )} */}
    

      {/* <PhotoDetail selectedImg={selectedImg.photo_url} />
      <div className={classes.sidebar}>
        <p>{selectedImg.photo_text}</p> */}


    <Button onClick={createNewImageObject} className={classes.btnSubmit}> Submit </Button>
    </div>
    </Modal >
  );

  async function createNewImageObject() {
    
    const newImage = {
      photo_text: "Hello world!",
      date: "2018-02-18T08:01:00.000Z",
      photo_url: url,
      trip_id: 1,
      coordinates: [ "9.67856000", "44.13700000"]
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
    // console.log(trip.photos);
    // console.log("response:", response);
  }
}

export default NewImageModal;
