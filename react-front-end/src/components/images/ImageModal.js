import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import PhotoDetail from "./PhotoDetail";

import "./ImageModal.css";


function ImageModal({ onClose, open, children, selectedImg }) {



  return (
    <Modal
      open={open}
      onClose={onClose}
      center
    >
      <PhotoDetail selectedImg={selectedImg} />
      <p>• Example of an existing blog post</p>
      <p>• Another blog post / note</p>
      <p>• An input field where you can write another blog post</p>
      <p>• A Post Button</p>


    </Modal>
  );
}

export default ImageModal;
