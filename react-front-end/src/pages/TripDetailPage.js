import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./TripDetailPage.module.css";

// Font Awesome Icon for Upload Image
// https://fontawesome.com/icons/square-plus?s=solid
// React Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Individual Icon
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import ImageGrid from "../components/images/ImageGrid";
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import UploadImageForm from "../components/images/UploadImageForm";
import ImageModal from "../components/images/ImageModal";
import UploadImageModal from "../components/images/UploadImageModal";
// import PhotoDetail from "../components/images/PhotoDetail";
import Map from "../components/maps/Map";


function TripDetailPage(props) {
  const [trip, setTrip] = useState();
  const [selectedImg, setSelectedImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const handleOnImageClick = (photo) => {
    setSelectedImg(photo);
    setOpenModal(true);
  };

  const handleNewModalClick = () => {
    setUploadModal(true);
  };

  const handleUploadSubmit = () => {
    setUploadModal(false);
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
        <p className={classes.tripDescription}>{trip.trip_description}</p>
        <Button onClick={handleNewModalClick} className={classes.addImageButton}><FontAwesomeIcon icon={faSquarePlus} /><span className={classes.addImageText}> Add to trip</span></Button> 
      </div>

      

      
      
      {/* <span className="classes.uploadImage"><FontAwesomeIcon icon={faSquarePlus} /> Select Image</span> */}

      {uploadModal && (
        <UploadImageModal trip={trip} setTrip={setTrip}
          submit={handleUploadSubmit}
          onClose={() => { setUploadModal(false); }}
          open={uploadModal}>
        </UploadImageModal>
      )}

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
        
      {/* <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} /> */}

</div>
    </div>
  );
}

export default TripDetailPage;
