import React from "react";
import classes from "./ImageModal.module.css";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

function ImageModal({ onClose, open, children }) {


  return (
    <Modal
      open={open}
      onClose={onClose}
      center
    >
      <div>
        {children}
        <p>This is a modal</p>
      </div>
    </Modal>
  );
}

export default Modal;
