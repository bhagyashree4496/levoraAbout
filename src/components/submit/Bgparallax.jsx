import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bg1 from "../../imagges/1@1.5x.jpg";
import { useRef } from "react";
export default function Try() {
  let ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);
  return (
    <div className="w-screen h-[110vh] overflow-hidden " ref={ref}>
      <motion.img
        src={bg1}
        style={{ scale: y }}
        transition={{ duration: 1 }}
      ></motion.img>
    </div>
  );
}
