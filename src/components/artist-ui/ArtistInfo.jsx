import { PlusIcon, CopyIcon } from "../../utils/icons";
import Instagram from "../../assets/Instagram.svg";
import Youtube from "../../assets/Youtube.svg";
import Twitter from "../../assets/Twitter.svg";
import Discord from "../../assets/Discord.svg";
import Globe from "../../assets/Globe.svg";

const ArtistInfo = ({ creator }) => {
  return (
    <div className=" bg-darkBrown px-10 pb-5 ">
      <div className="  md:flex items-start justify-between text-white  py-8">
        <h2 className=" font-semibold text-xl md:text-3xl lg:text-4xl ">
          {creator.username}
        </h2>
        <div className="  sm:flex gap-4 pt-5 md:pt-0">
          <button className="flex gap-x-2 items-center w-full sm:w-fit  mb-5 sm:mb-0 bg-primaryPurple hover:bg-primaryPurple/80 py-3 px-5 rounded-xl ">
            <CopyIcon />
            <p className="text-xs font-semibold">0xc0E3...B79C</p>
          </button>

          <button className="flex gap-x-2 items-center w-full sm:w-fit border-2 border-primaryPurple  py-3 px-5 rounded-xl ">
            <PlusIcon />
            <p className="text-xs font-semibold">Follow</p>
          </button>
        </div>
      </div>
      <div className=" flex gap-8 text-white">
        <div>
          <h4 className=" font-bold text-base sm:text-lg ">250k+</h4>
          <p className=" text-sm sm:text-base font-WorkSans"> Volume</p>
        </div>
        <div>
          <h4 className=" font-bold text-base sm:text-lg ">50+</h4>

          <p className=" text-sm sm:text-base font-WorkSans"> NFTs Sold</p>
        </div>
        <div>
          <h4 className=" font-bold text-base sm:text-lg ">3000+</h4>

          <p className=" text-sm sm:text-base font-WorkSans"> Followers </p>
        </div>
      </div>
      <div className=" my-5">
        <h5 className=" font-bold text-[#858584]">Bio</h5>
        <p className=" text-base font-WorkSans text-white">
          The internet's friendliest designer kid.
        </p>
      </div>
      <div className=" ">
        <h5 className=" font-bold text-[#858584] mb-2">Links</h5>
        <div className="flex space-x-2">
          <img src={Globe} alt="" className=" w-7 h-7" />
          <img src={Discord} alt="" className=" w-7 h-7" />
          <img src={Youtube} alt="" className=" w-7 h-7" />
          <img src={Twitter} alt="" className=" w-7 h-7" />
          <img src={Instagram} alt="" className=" w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
