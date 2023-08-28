import React from "react";
import Reveal from "./Reveal";

export default function HeroContent() {
  return (
    <div className="max-w-[40%] absolute top-[25%] left-1/2 -translate-x-1/2 z-100 ">
      <Reveal>
        <h1 className="font-bold text-center text-[5vw] leading-[110%] text-[#fcc17c]">
          Evolutionary NFT adventure game
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-white font-medium leading-[150%] text-center text-[1.35vw] mt-8">
          It represents the first metaverse MMORPG built on Binance Smart Chain
          Platform. By joining the Levora world, players will transform into
          Dragon Warriors, fighting against the evil force to regain a
          once-reigning peace.
        </p>
      </Reveal>
      <div
        className="relative z-10 w-full flex items-center justify-center 
"
      >
        <div className="max-w-[80%] my-[400px]">
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
      </div>
    </div>
  );
}
