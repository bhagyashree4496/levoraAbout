import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/">
          {" "}
          <img src="https://cdn.cuberto.com/lv/img/logo/logo.svg"></img>
        </NavLink>
      </div>
      <div className="flex-1 flex items-center space-x-24 justify-end">
        <NavLink to="/about">
          <span className="text-left font-medium cursor-pointer text-[18px]">
            About
          </span>
        </NavLink>

        <motion.button className="text-[18px] leading-[52px] cursor-pointer py-1 px-16 border-2 border-white rounded-full font-medium relative">
          Subsribe
        </motion.button>
        {/* <button className="text-lg">svg</button> */}
        <Link to="/">
          <div className="w-10 h-[3px] rounded-full bg-white m-[5px]"></div>
          <div className="w-10 h-[3px] rounded-full bg-white m-[5px]"></div>
        </Link>
      </div>
    </motion.div>
  );
}
