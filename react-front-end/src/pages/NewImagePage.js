import React, { useState } from 'react';
import classes from '../components/images/ImageGrid.module.css';

import UploadImageForm from '../components/images/UploadImageForm';
// import ImageGrid from '../components/images/ImageGrid';
import Modal from '../components/images/Modal';


function NewImagePage() {

  const [selectedImg, setSelectedImg] = useState(null);

  return <section>

    <h1>Add New Image</h1>

    <div className={classes.App}>
      <UploadImageForm />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  </section>;
}

export default NewImagePage;