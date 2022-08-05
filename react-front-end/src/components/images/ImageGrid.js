import React from "react";
import useFirestore from "../../hooks/useFirestore";
import classes from "./ImageGrid.module.css";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, photos }) => {
  return (
    <div className={classes.imggrid}>
      {photos &&
        photos.map((photo) => (
          <motion.div
            layout
            className={classes.imgwrap}
            key={photo.id}
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(photo.url)}
          >
            <motion.img
              src={photo.url}
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
