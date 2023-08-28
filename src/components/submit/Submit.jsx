import React from "react";

import img2 from "../../imagges/2@1.5x.png";
import img3 from "../../imagges/3@1.5x.png";
//import { motion } from "framer-motion";

import { useAnimation, motion } from "framer-motion";
import Bgparallax from "./Bgparallax";

const Variants = {
  visible: { scale: 1 },
  hidden: { scale: 1.1 },
};

export default function Submit() {
  return (
    <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
      <Bgparallax></Bgparallax>
      <img
        src={img2}
        className="absolute top-0 left-0 w-[100vw] h-[100vh]"
      ></img>
      <img
        src={img3}
        className="absolute top-0 left-0 w-[100vw] h-[100vh]"
      ></img>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-w-4xl ">
        {" "}
        <h1 className="font-bold text-center text-[5vw] leading-[110%] text-[#fcc17c]">
          Welcome to Levora metaverse! game
        </h1>
        <p className="text-white font-medium leading-[150%] text-center text-[1.35vw] mt-8">
          Just a few months left until the community pre-sale begins! We are
          doing our best to complete all preparations and launch the product.
          <br></br>
          Subscribe to be aware of the latest news
        </p>
        <div className="flex gap-10 mt-10 ">
          <input
            className="p-5 rounded-full bg-[#00000073] w-[40%] font-bold text-[25px]"
            placeholder="Email"
          ></input>
          <button className="p-5 rounded-full bg-[#6f3ec4] w-[40%] font-bold text-white text-[25px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
