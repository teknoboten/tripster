import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./TripDetailPage.module.css";

import ImageGrid from "../components/images/ImageGrid";
import { motion } from "framer-motion";
import classes from "../components/images/ImageGrid.module.css";
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
  }

  const handleUploadSubmit = () => {
    setUploadModal(false)
  }

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
  return (
    <section>
      <h1>{trip.trip_name}</h1>
      <h2>{trip.trip_description}</h2>
      <Map />

      {/* <UploadImageForm trip_id={trip.id} trip={trip} setTrip={setTrip} /> */}
      <Button variant="primary" onClick={handleNewModalClick}>+</Button>
        
      {uploadModal && (
        <UploadImageModal trip={trip} setTrip={setTrip} 
        submit={handleUploadSubmit} 
        onClose={() => {setUploadModal(false)}} 
        open={uploadModal}>
        </UploadImageModal>
      )}

      {/* {uploadModal && (
        <UploadImageModal trip={trip} setTrip={setTrip} onClose={() => {
          setUploadModal(null);
        }} open={uploadModal}>
        </UploadImageModal>
      )} */}
        


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
    </section>
  );
}

export default TripDetailPage;
