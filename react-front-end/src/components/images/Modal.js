import React from "react";
import { motion } from "framer-motion";
import classes from "./Modal.module.css";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("Modal_backdrop__las1L")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className={classes.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
