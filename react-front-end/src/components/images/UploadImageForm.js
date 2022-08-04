import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import classes from "./UploadImageForm.module.css";

const UploadImageForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError(`please select an image file (png or jpg)`);
    }
  };

  return (
    <form className={classes.form}>
      <label className={classes.imageLabel}>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className={classes.output}>
        {error && <div className={classes.error}>{error} </div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadImageForm;
