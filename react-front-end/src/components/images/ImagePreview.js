import React from "react";
import useStorage from "../../hooks/useStorage";

const ImagePreview = ({ img }) => {
  const { url } = useStorage(file);

  console.log(img); 




  return (
    <div>
      <img src={img} />
    </div>


  )


}

export default ImagePreview;