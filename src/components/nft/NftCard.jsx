import React from "react";
// import nft1 from "../../imagges/nft1.webp";
// import nft1bg from "../../imagges/nft1bg.png";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
export default function NftCard({
  title,
  discripption,
  image,
  bgimage,
  direction,
}) {
  return (
    <div className="bg-gradient-to-r from-[#4e1263b3] to-[#361263b3] rounded-[40px]   px-20 pb-5">
      <div className="flex justify-between items-center">
        {" "}
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <motion.img
              animate={{ y: 30 }}
              transition={{
                ease: "linear",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                masss: 0.5,
              }}
              src={image}
              className="absolute top-0 left-0 -mt-5"
            ></motion.img>
            <motion.img
              animate={{ y: -30 }}
              transition={{
                ease: "linear",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              src={bgimage}
              className="top-0 left-0 -mt-4"
            ></motion.img>
          </div>

          <div className="w-[200px] h-[15px] bg-[#00000070] rounded-[50%] -mt-8"></div>
        </div>
        <div className="max-w-md">
          <Reveal>
            <h3 className="text-[48px] leading-[1.24] text-[#fcc17c] font-bold">
              {title}
            </h3>
          </Reveal>

          <Reveal>
            <p className="font-medium text-[25px] text-white leading-[1.80]">
              {discripption}
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
