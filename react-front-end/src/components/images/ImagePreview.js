import React from "react";
import classes from './UploadImageForm.module.css';

const ImagePreview = ({ img }) => {

  return (
    <div>
      <img className={classes.imgpreview} src={img} alt={"preview"}/>
    </div>


  )


}

export default ImagePreview;