import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const characters = [
  {
    name: "Disco Dosa",
    image: "/img/rectangle-2.png",
    position: "top",
  },
  {
    name: "Incredible Idli",
    image: "/img/rectangle-3.png",
    position: "middle",
  },
  {
    name: "Vortex Vada",
    image: "/img/rectangle-3.png",
    position: "bottom",
  },
];

const CharacterCard = ({ name, image, position }) => (
  <div className="relative w-full flex justify-center mt-4">
    <img
      className="w-[207px] h-[204px] object-contain"
      alt={`${name} character`}
      src={image}
    />
    <Badge
      className={`absolute ${position === "top" ? "bottom-0 right-12" : "top-0 left-8"} h-[31px] bg-[#0b254d] rounded-[32px] px-4 py-0 flex items-center justify-center`}
    >
      <span className="text-white text-[19px] tracking-[-0.57px] leading-[20.9px]">
        {name}
      </span>
    </Badge>
  </div>
);

export const Screen = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="425:2688"
    >
      <div className="bg-white w-[390px] h-[844px] relative">
        <header className="w-full h-[156px] relative">
          <div className="w-full h-[45px] bg-white shadow-[0px_4px_4px_#00000008] flex items-center justify-between px-4">
            <img
              className="w-[94px] h-[72px] object-cover"
              alt="Logo"
              src="/img/onbf22cee1nk9pq2lkngto1rm9i1702040995319-200x200-1.png"
            />
            <Button
              className="h-[23px] bg-[#0b254d] rounded-[32px] px-2 py-0 text-xs"
              variant="default"
            >
              Search your State
            </Button>
          </div>
          <img
            className="w-[171px] h-[106px] absolute top-[50px] left-1/2 -translate-x-1/2 object-cover"
            alt="Power of Protein"
            src="/img/image-15.png"
          />
        </header>

        <h1 className="text-center text-[#0b254d] text-[19px] tracking-[-0.57px] leading-[20.9px] mt-0 mb-4 font-normal">
          Choose Your Player
        </h1>

        <section className="w-full relative">
          <div className="absolute top-[216px] left-1/2 -translate-x-1/2 z-10 text-white text-[34px] font-normal tracking-[-1.02px] leading-[37.4px]">
            <span className="tracking-[-0.35px]">V</span>
            <span className="font-bold tracking-[-0.35px]">/</span>
            <span className="tracking-[-0.35px]">S</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            {characters.map((character) => (
              <CharacterCard key={character.name} {...character} />
            ))}
          </div>

          <div className="absolute w-9 h-[27px] top-[318px] left-[71px]">
            <img alt="Character detail" src="/img/vector.svg" />
          </div>
          <div className="absolute w-[34px] h-5 top-[306px] left-[278px]">
            <img alt="Character detail" src="/img/vector-1.svg" />
          </div>
          <div className="absolute w-[22px] h-[19px] top-[489px] left-[180px]">
            <img alt="Character face" src="/img/layer-1-3.svg" />
          </div>
          <div className="absolute w-8 h-[23px] top-[319px] left-[184px]">
            <img alt="Character detail" src="/img/layer-1.svg" />
          </div>
        </section>
      </div>
    </main>
  );
};
