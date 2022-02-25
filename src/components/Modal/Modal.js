import { motion } from "framer-motion";
import React from "react";

const Modal = ({ children, handleClose }) => {
  const variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 27,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      className="fixed top-0 left-0 w-full bg-[#00000075] min-h-screen flex items-center justify-center"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="w-5/6 md:-mt-32 max-w-xl sm:max-w-lg rounded-lg bg-white md:py-5 md:px-3 "
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
