import React, { useState } from 'react';
import classes from '../components/images/ImageGrid.module.css';
import { useParams } from "react-router-dom";

import UploadImageForm from '../components/images/UploadImageForm';
import ImageModal from '../components/images/ImageModal';


function NewImagePage(props) {

  const { trip_id } = useParams();

  const [selectedImg, setSelectedImg] = useState(null);

  return <section>

    <h1>Add New Image</h1>

    <div className={classes.App}>
      <UploadImageForm trip_id={trip_id} />
      {selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  </section>;
}

export default NewImagePage;