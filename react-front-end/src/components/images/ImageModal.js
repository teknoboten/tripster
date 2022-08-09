import React from "react";
import classes from "./ImageModal.module.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import PhotoDetail from "./PhotoDetail";

function ImageModal({ onClose, open, children, selectedImg }) {


  return (
    <Modal
      open={open}
      onClose={onClose}
      center
    >
      <PhotoDetail selectedImg={selectedImg} />
      {/* map
      trip_description
      form */}

    </Modal>
  );
}

export default ImageModal;
