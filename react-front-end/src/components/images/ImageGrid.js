import React from "react";
import classes from "./ImageGrid.module.css";
import { motion } from "framer-motion";


const ImageGrid = ({ onImageClick, photos }) => {

function checkPhotos(photos) {
  return ((photos.length > 6) ? true : false)
}

const gridMode = checkPhotos(photos);


  return (
    <div className={gridMode ? classes.imggrid : classes.notAGrid}>
    {/* <div className={classes.imggrid}> */}
      {photos &&
        photos.map((photo) => (
          <motion.div
            className={classes.imgwrap}
            key={photo.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              onImageClick(photo);
            }}
          >
            <motion.img
              src={photo.photo_url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
