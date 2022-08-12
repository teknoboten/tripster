import React from "react";
// import { motion } from "framer-motion";
import classes from "./PhotoDetail.module.css";

const PhotoDetail = ({ selectedImg, setSelectedImg }) => {
  return (
    <div className={classes.photoDetail}>
      <img
        src={selectedImg}
        alt="enlarged pic"
      />
    </div>
  );
};

export default PhotoDetail;