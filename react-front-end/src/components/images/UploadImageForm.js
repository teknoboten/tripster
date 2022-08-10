import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import classes from "./UploadImageForm.module.css";
import { useHistory } from "react-router-dom";



const UploadImageForm = ({ trip_id, trip, setTrip }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [storedUrl, setStoredUrl] = useState("");
  const history = useHistory();

  const types = ["image/png", "image/jpeg"];

  useEffect(() => {
    //post to the DB
    if (storedUrl !== "") {
      //save storedURL to the db
      // .then()
      history.push(`/trips/${trip_id}`);
    }
  }, [storedUrl]);

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);

    //------ Existing validation ------
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      // EXIF.getData(selected, function () {
      //   var exifData = EXIF.pretty(this);
      //   if (exifData) {
      //     // console.log(exifData);

      //     function calculateGPSCoordinates = (arr) => {

      //     }
      //     const a = EXIF.getTag(this, 'GPSLatitude');
      //     const firstNum = a[0].valueOf();
      //     const secondNum = a[1].valueOf();
      //     const thirdNum = a[2].valueOf();
      //     const latitude = firstNum + secondNum / 60 + thirdNum / 3600;
      //     console.log('Latitude in decimals:', latitude);
      //   } else {
      //     console.log("No EXIF data found in image '" + selected.name + "'.");
      //   }
      // });
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
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            setStoredUrl={setStoredUrl}
            trip={trip}
            setTrip={setTrip}
          />
        )}
        {/* <p>{storedUrl} {trip_id}</p> */}
      </div>
    </form>
  );
};

export default UploadImageForm;
