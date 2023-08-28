import React from "react";
import "../index.css";
import trade from "../imagges/1.svg";
import craft from "../imagges/2.svg";
import upagrade from "../imagges/3.svg";
import win from "../imagges/4.svg";
import "../index.css";

export default function MainFeatures() {
  let features = [
    {
      title: "Trade",
      discription: "Use a trustless trading platform",
      image: trade,
    },
    {
      title: "Craft",
      discription: "Create unique items",
      image: craft,
    },
    {
      title: "Upgrade",
      discription: "Upgrade your dragons",
      image: upagrade,
    },
    { title: "Win", discription: "Compete with other players", image: win },
  ];
  return (
    <>
      {" "}
      {/* <div
        className="relative z-10 w-full flex items-center justify-center 
"
      >
        <div className="max-w-[40%] mt-8">
          <Reveal>
            <h1 className="font-bold text-center text-[3.5vw] leading-[110%] text-[#fcc17c] ">
              Main features
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-white font-medium leading-[150%] text-center text-[1.35vw] mt-8">
              A visually stunning dragon world, full of heroes, fights, rewards
              and achievements
            </p>
          </Reveal>
        </div>
      </div> */}
      <div className="flex items-center justify-center w-screen text-white">
        <div className="flex items-start justify-center gap-[100px] px-40 bg-[#1f0442] mt-[400px] w-full ">
          {features.map((feature) => {
            return (
              <div className="flex flex-col  justify-center items-center gap-8 max-w-[250px]">
                <div className=" featuresimages">
                  <img src={feature.image} className="w-16 "></img>
                </div>
                <span className="w-[100px] h-[4px] bg-[#2c134db1] my-5"></span>

                {/* <span className=" w-[5px] h-[20px]  mt-5  border-[#2c134db1]  border-4 rounded-md  "></span> */}

                <h3 className="text-[#fcc17c] text-[30px] font-bold leading-[1.07] text-center ">
                  {feature.title}
                </h3>

                <p className="font-semibold text-[25px] leading-[1.80]  text-center">
                  {feature.discription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
