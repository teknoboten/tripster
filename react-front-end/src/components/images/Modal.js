import React from "react";
import classes from "./Modal.module.css";
import 'react-responsive-modal/styles.css';
import { Modal as ReactModal } from 'react-responsive-modal';
import { useState } from 'react';

function Modal({ onClose, children }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <ReactModal open={open} onClose={onCloseModal}>
      {children}
    </ReactModal>


  );
}

export default Modal;
