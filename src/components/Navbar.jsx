import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{
        duration: 3,
        ease: "linear",
        type: "spring",
        mass: 0.5,
        delay: 1,
      }}
      className="fixed top-0 w-full px-14 py-8 flex items-center z-20 "
    >
      <div className="flex-1">
        <img
          src="https://cdn.cuberto.com/lv/img/logo/logo.svg"
          className=" w-48"
        ></img>
      </div>
      <div className="flex-1 flex items-center space-x-24 justify-end">
        <a
          href="#"
          className="text-left font-medium cursor-pointer text-[25px]"
        >
          About
        </a>
        <button className="text-[25px] leading-[52px] cursor-pointer py-3 px-16 border-2 border-white rounded-full font-medium">
          Subsribe
        </button>
        {/* <button className="text-lg">svg</button> */}
        <Link to="/">
          <div className="w-10 h-[3px] rounded-full bg-white m-[5px]"></div>
          <div className="w-10 h-[3px] rounded-full bg-white m-[5px]"></div>
        </Link>
      </div>
    </motion.div>
  );
}
