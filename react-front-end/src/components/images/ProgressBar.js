import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";
import classes from "./ImageGrid.module.css";

const ProgressBar = ({ file, setFile, setStoredUrl }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setStoredUrl(url);
    }
  }, [url, setFile ]);

  return <motion.div className={classes.progressbar}
  initial={{ width: 0 }}
  animate={{ width: progress + "%"}}
  ></motion.div>;
};

export default ProgressBar;
