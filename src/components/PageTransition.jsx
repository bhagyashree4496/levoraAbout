import React from "react";
import { motion } from "framer-motion";
export default function PageTransition() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1, transformOrigin: "bottom" }}
      transition={{
        duration: 0.5,
        type: "tween",
        stiffness: 100,
      }}
      className="fixed top-0 w-[100vw] h-[100vh] bg-[#1f0442] z-100 origin-top"
    ></motion.div>
  );
}
