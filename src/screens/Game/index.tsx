import { Badge } from "../../components/ui/badge";
import { CHARACTERS } from "../../lib/home";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({
  name,
  image,
  position,
  onClick,
}: {
  name: string;
  image: string;
  position: "right" | "left";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative w-full flex justify-center group 
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b254d] focus-visible:ring-offset-2 
      rounded-lg transition-transform duration-200 
      hover:scale-105 active:scale-95 
      touch-none tap-highlight-transparent"
  >
    <div className="relative w-full flex justify-center">
      <img
        className={`${
          position === "right"
            ? "w-auto h-[170px] object-contain"
            : "w-auto h-[220px] object-contain"
        } transition-transform duration-200`}
        alt={`${name} character`}
        src={image}
      />
    </div>
  </button>
);

export const GameIntro = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCharacterSelect = (characterName: string) => {
    const urlCharacter = characterName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/game/${urlCharacter}`);
  };

  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="425:2688"
    >
      <div className="bg-white w-[390px] relative h-full">
        <header className="w-full h-[120px] relative">
          <img
            className="w-[171px] h-[106px] absolute left-1/2 -translate-x-1/2 object-cover"
            alt="Power of Protein"
            src="/img/image-15.png"
          />
        </header>

        <div className="flex flex-col items-center">
          <CharacterCard
            name="Disco Dosa"
            image="https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001785.png"
            position="right"
            onClick={() => handleCharacterSelect("Disco Dosa")}
          />
          <div className="w-full flex flex-row items-center justify-center">
            <span className="text-center text-[#08224C] text-[49px] tracking-[-1.47px] leading-[110%] font-[helvetica] font-bold mt-0 [-webkit-text-stroke:1px_#08224C]">
              v
            </span>
            <span className="text-center text-[#0b254d] text-[49px] tracking-[-1.47px] leading-[110%] font-[helvetica] font-bold [-webkit-text-stroke:1px_#08224C] mt-[15px] ml-[-5px]">
              s
            </span>
          </div>
          <CharacterCard
            name="Incredible Idli"
            image="https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/Group+1000001794.png"
            position="left"
            onClick={() => handleCharacterSelect("Incredible Idli")}
          />
          <Badge
            className={`h-[31px] bg-[#0b254d] rounded-[32px] px-4 py-0 flex items-center justify-center 
        transition-colors duration-200 group-hover:bg-[#1a3b6d] group-active:bg-[#0b254d]`}
          >
            <span className="text-white text-center font-[helvetica] text-[19px] font-normal leading-[110%] tracking-[-0.57px]">
              Play Game
            </span>
          </Badge>
        </div>
      </div>
    </main>
  );
};
