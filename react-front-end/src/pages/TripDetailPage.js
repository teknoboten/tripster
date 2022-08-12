import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./TripDetailPage.module.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

import ImageGrid from "../components/images/ImageGrid";
import { motion } from "framer-motion";
import UploadImageForm from "../components/images/UploadImageForm";
import ImageModal from "../components/images/ImageModal";
import Map from "../components/maps/Map";


function TripDetailPage(props) {
  const [trip, setTrip] = useState();
  const [selectedImg, setSelectedImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOnImageClick = (photo) => {
    setSelectedImg(photo);
    setOpenModal(true);
  };
  const params = useParams();

  useEffect(() => {
    //request image  from api
    axios.get(`/api/trips/${params.tripId}`).then((result) => {
      setTrip(result.data);
    });
  }, [params.tripId]);

  if (trip === undefined) {
    return <></>;
  }

  function updatePhotoText(photoId, photoText) {
    // loop through trip.photos
    return (
      trip.photos.map((photo) => {
        // find the one that matches the id
        if (photo.id === photoId) {
          // console.log('Photo Object', photo);
          // update that objects photo text 
          photo.photo_text = photoText;
        }
      }
      ));
  };

  return (
  <div className={classes.tripPageContainer}>
    <div className={classes.mapContainer}>
      <Map photos={trip.photos} />
    </div>

    <div className={classes.imgGridContainer}>
      <div className={classes.tripHeader}>
      <h1 className={classes.tripName}>{trip.trip_name}</h1>
      <span className={classes.tripDescription}>{trip.trip_description}</span>
      </div>
      <ImageGrid photos={trip.photos} onImageClick={handleOnImageClick} />

    {selectedImg && (
      <ImageModal
        selectedImg={selectedImg}
        onClose={() => {
          setSelectedImg(null);
          setOpenModal(false);
        }}
        open={openModal}
        updatePhotoText={updatePhotoText}
      ></ImageModal>
    )}
        
      <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} />

</div>
    </div>
  );
}

export default TripDetailPage;
