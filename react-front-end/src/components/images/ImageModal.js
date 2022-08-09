import React from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import PhotoDetail from "./PhotoDetail";

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import classes from "./ImageModal.module.css";
import "./ImageModal.css";

function ImageModal({ onClose, open, children, selectedImg }) {



  return (
    <Modal
      open={open}
      onClose={onClose}
      center
    >
      <PhotoDetail selectedImg={selectedImg} />
      <div className={classes.sidebar}>




        <p>A: Form shown if photo_text is currently empty. A textarea form is shown to allow the user to write a description</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder="Tell us about this photo" />
          </Form.Group>
          <Button variant="warning" type="submit" className="m-2">
            Post
          </Button>
        </Form>

        <p>------------------------------------------</p>
        <p>B: Form shown if there IS existing photo_text. The photo_text is displayed along with an edit button.</p>
        <Form>
          <p>Scuba Junction was a really cool scuba diving school in Ko Tao. We stayed here for 3 days learning to scuba dive. We went on 5 dives.</p>
          <Button variant="success" type="submit" className="m-2">
            Edit Post
          </Button>
        </Form>


        <p>------------------------------------------</p>
        <p>C: Form shown if the user clicks the Edit Post button. They are shown the text area form with the text pre-populated with the existing photo_text. There is a Cancel button and a Done button</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder="Scuba Junction was a really cool scuba diving school in Ko Tao. We stayed here for 3 days learning to scuba dive. We went on 5 dives." />
          </Form.Group>
          <Button variant="secondary" type="submit" className="m-2">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="m-2">
            Done
          </Button>
        </Form>
      </div>


    </Modal >
  );
}

export default ImageModal;
