import React from "react";
import nft1 from "../../imagges/nft1.webp";
import nft2 from "../../imagges/nft2.webp";
import nft3 from "../../imagges/nft3.webp";
import nft4 from "../../imagges/nft4.webp";
import nft1bg from "../../imagges/nft1bg.png";
import nft2bg from "../../imagges/nft2bg.png";
import nft3bg from "../../imagges/nft3bg.png";
import nft4bg from "../../imagges/nft4bg.png";
import NftCard from "./NftCard";

export default function NftCards() {
  let nfts = [
    {
      title: "Meteorite",
      disciption:
        "Buy NFT meteorites, crack them and get dragon eggs to raise your own dragon or get powerful dust to craft weapons, food, utilities.",
      bgimage: nft1bg,
      image: nft1,
      direction: "flex-row",
    },
    {
      title: "Egg",
      disciption:
        "A baby dragon hatches from the egg, but it takes time for it to happen. You have to protect and take care of the egg.",
      bgimage: nft2bg,
      image: nft2,
      direction: "flex-row-reverse",
    },
    {
      title: "Meteorite Dust",
      disciption:
        "Meteorite dust is a unique and valuable element. You can use it to make various game elements, such as weapons, food, etc.",
      bgimage: nft3bg,
      image: nft3,
      direction: "flex-row",
    },
    {
      title: "Baby dragon",
      disciption:
        "The dragon cub is a cute and strong creature, which characteristics it will acquire will depends on you.",
      bgimage: nft4bg,
      image: nft4,
      direction: "flex-row-reverse",
    },
  ];

  return (
    <div className="px-52 space-y-[200px]">
      {nfts.map((nft) => {
        return (
          <NftCard
            title={nft.title}
            discripption={nft.disciption}
            image={nft.image}
            bgimage={nft.bgimage}
            direction={nft.direction}
          ></NftCard>
        );
      })}
    </div>
  );
}
