import React from "react";
import { motion } from "framer-motion";
import classes from "./PhotoDetail.module.css";

const PhotoDetail = ({ selectedImg, setSelectedImg }) => {
  return (
    <div
      className={classes.backdrop}
    // onClick={handleClick}
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    >
      <img
        src={selectedImg}
        alt="enlarged pic"
      // initial={{ y: "-100vh" }}
      // animate={{ y: 0 }}
      />

    </div>
  );
};

export default PhotoDetail;