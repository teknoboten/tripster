import React from "react";
import useFirestore from "../../hooks/useFirestore";
import classes from './ImageGrid.module.css';
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className={classes.imggrid}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className={classes.imgwrap}
            key={doc.id}
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }} />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
