import React from "react";
import NftCard from "./NftCard";
import NftCards from "./NftCards";
import Reveal from "../Reveal";

export default function Nft() {
  return (
    <div className="py-[100px]">
      <div className="flex justify-center py-[100px]">
        <h2 className="text-[#fcc17c] font-bold  leading-[1.25] text-[48px] max-w-2xl text-center">
          <Reveal>Take digital avatar with you </Reveal>
          <Reveal>to Gaming. 4 Types of</Reveal>
          <Reveal> NFT’s:</Reveal>
        </h2>
      </div>
      <NftCards></NftCards>
    </div>
  );
}
