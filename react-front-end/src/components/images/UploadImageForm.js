import React, { useState } from "react";

const UploadImageForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError(`please select an image file (png or jpg)`);
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error} </div>}
      </div>
    </form>
  );
};

export default UploadImageForm;
