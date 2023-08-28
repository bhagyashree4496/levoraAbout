import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
export default function Reveal({ children, width = "fit-content" }) {
  let ref = useRef("null");
  const isInView = useInView(ref);
  //, { once: "true" }
  let mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
