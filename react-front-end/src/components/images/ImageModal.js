import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";

// React Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import classes from "./ImageModal.module.css";
import "./ImageModal.css";

function ImageModal({ onClose, open, children, selectedImg, updatePhotoText }) {
  const [photoText, setPhotoText] = useState(selectedImg.photo_text);
  const [isEditMode, setEditMode] = useState(false);






  async function submitHandler(event) {
    event.preventDefault();
    // alert(`You edited the existing photo_text with: ${photoText}`);
    const textArea = document.querySelector("textarea.form");
    console.log(textArea);

    const photoSendData = {
      id: selectedImg.id,
      photo_text: photoText,
    };

    const response = await fetch("/api/photo/edit", {
      method: "PUT",
      body: JSON.stringify(photoSendData),
      headers: { "Content-Type": "application/json" },
    });

    const photoReceiveData = (await response.json()).photo_text;
    console.log(photoReceiveData);
    // history.push(`/trips/1`);
    setPhotoText(photoReceiveData);
    if (textArea) {
      textArea.value = "";
    }
    setEditMode(false);
    updatePhotoText(selectedImg.id, photoText);
  }




  // console.log('selectedImg:', selectedImg);
  return (
    <Modal open={open} onClose={onClose} center>
      <PhotoDetail selectedImg={selectedImg.photo_url} />
      <div className={classes.sidebar}>
        {/* When there is no photo data */}




        {/* When not in edit mode */}
        {!isEditMode &&
          <>
            <p>{photoText}</p>
            <button
              className={classes.buttonNoBootstrap}
              type="button"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          </>
        }

        {/* When you ARE editing */}
        {isEditMode &&
          <form className={classes.form} onSubmit={submitHandler}>
            <textarea
              id="photoText"
              rows={5}
              value={photoText}
              placeholder="Tell us about this photo"
              onChange={(e) => setPhotoText(e.target.value)}
            ></textarea>
            <button className={classes.buttonNoBootstrap} type="submit">Save</button>
          </form>
        }

      </div>
    </Modal >
  );
}

export default ImageModal;
