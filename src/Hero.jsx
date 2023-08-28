import React, { useRef } from "react";
import topImage from "./bg.jpg";
import bottomImage from "./3.webp";
import dummy from "./imagges/3.svg";
import { motion, useScroll, useTransform } from "framer-motion";
//import { Parallax } from "react-parallax";

import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import MainFeatures from "./components/MainFeatures";
import PageTransition from "./components/PageTransition";
import Nft from "./components/nft/Nft";
import Submit from "./components/submit/Submit";

const Hero = () => {
  let ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="bg-[#1f0442] w-[100vw]  ">
      <div
        className="text-white relative w-full h-screen bg-[#1f0442] "
        ref={ref}
      >
        {/* hero bg image */}
        <motion.img
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          src={topImage}
          className="w-full  h-[100vh] absolute inset-0 z-0"
          style={{ y: y }}
        ></motion.img>
        <img
          src={bottomImage}
          className="w-screen absolute inset-y-[25%] z-20 "
        ></img>
        {/* <motion.div
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          className=""
        >
          <Parallax
            bgImage={topImage}
            bgImageAlt="the cat"
            strength={-200}
            className="w-screen h-[100vh]"
          >
            {" "}
          </Parallax>
        </motion.div>

        <img src={bottomImage} className="w-full absolute top-[30%] z-10"></img> */}
        {/* navbar */}
        <Navbar></Navbar>
        {/* hero content */}

        <HeroContent></HeroContent>

        {/* main fatures headline */}
        {/* hero bg image2 */}
        {/* <div className="bg-[#1a0533] w-full h-full -z-10 fixed top-0 "></div> */}
      </div>
      <MainFeatures></MainFeatures>

      <Nft></Nft>
      <Submit></Submit>
      <PageTransition></PageTransition>
    </div>
  );
};

export default Hero;
