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

function ImageModal({ onClose, open, children, selectedImg }) {
  const [photoText, setPhotoText] = useState(selectedImg.photo_text);
  const [isEditMode, setEditMode] = useState(false);



  async function submitHandler(event) {
    event.preventDefault();
    // alert(`You edited the existing photo_text with: ${photoText}`);
    const textArea = document.querySelector("textarea.form-control");
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
    textArea.value = "";
  }




  // console.log('selectedImg:', selectedImg);
  return (
    <Modal open={open} onClose={onClose} center>
      <PhotoDetail selectedImg={selectedImg.photo_url} />
      <div className={classes.sidebar}>
        {!isEditMode &&
          <><p>{photoText}</p>
            <Button
              type="button"
              onClick={() => setEditMode(true)}
            >
              Edit
            </Button></>
        }

        {isEditMode &&
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Tell us about this photo"
                id="photoText"
                value={photoText}
                onChange={(e) => setPhotoText(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="warning"
              type="submit"
              className="m-2"
            // onClick={(e) => console.log("e.target.value", e.target.value)}
            // onClick={(e) => console.log("e.target", e.target)}
            // onClick={() => setEditMode(false)}
            >
              Save
            </Button>
          </Form>
        }


        {/* <p>------------------------------------------</p>
        <p>
          B: Form shown if there IS existing photo_text. The photo_text is
          displayed along with an edit button.
        </p>
        <Form>
          <p>
            Scuba Junction was a really cool scuba diving school in Ko Tao. We
            stayed here for 3 days learning to scuba dive. We went on 5 dives.
          </p>
          <Button variant="success" type="submit" className="m-2">
            Edit Post
          </Button>
        </Form>

        <p>------------------------------------------</p>
        <p>
          C: Form shown if the user clicks the Edit Post button. They are shown
          the text area form with the text pre-populated with the existing
          photo_text. There is a Cancel button and a Done button
        </p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Scuba Junction was a really cool scuba diving school in Ko Tao. We stayed here for 3 days learning to scuba dive. We went on 5 dives."
            />
          </Form.Group>
          <Button variant="secondary" type="submit" className="m-2">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="m-2">
            Done
          </Button>
        </Form> */}
      </div>
    </Modal >
  );
}

export default ImageModal;
