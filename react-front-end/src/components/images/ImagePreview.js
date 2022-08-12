import React from "react";
import useStorage from "../../hooks/useStorage";
import classes from './UploadImageForm.module.css';

const ImagePreview = ({ img }) => {
  // const { url } = useStorage(file);

  return (
    <div>
      <img className={classes.imgpreview} src={img} />
    </div>


  )


}

export default ImagePreview;