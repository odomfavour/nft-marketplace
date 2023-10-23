import Avatar from "../../assets/images/artistpage/Avatar.png";
import galaxy from "../../assets/images/home/galaxy.png";

const NftCards = ({ item }) => {
  return (
    <div className=" text-white">
      <div className=" h-[259px] flex justify-center">
        <img src={item.img} alt="Space" className="w-full object-center " />
      </div>
      <div className="p-[1.25rem] pb-[1.56rem] bg-darkBrown rounded-b-[1.25rem]">
        <h3 className="font-WorkSans text-xl md:text-3xl  font-semibold leading-[140%] mb-[0.31rem]">
          {item.title}
        </h3>
        <div className="flex items-center gap-[0.75rem] mb-[1.56rem]">
          <img src={Avatar} alt="Avatar" />
          <p className="text-base leading-[140%]  font-SpaceMono ">Animakid</p>
        </div>
        <div className="flex items-start justify-between font-SpaceMono">
          <div>
            <h4 className="text-[0.75rem] text-[#858584] leading-[110%] mb-[0.5rem]">
              Price
            </h4>
            <p className="text-[0.75rem] sm:text-base leading-[110%]">
              1.63 ETH
            </p>
          </div>
          <div>
            <h4 className="text-[0.75rem] text-[#858584] leading-[110%] mb-[0.5rem]">
              Highest Bid
            </h4>
            <p className="text-[0.75rem] sm:text-base leading-[110%]">
              0.33 wETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCards;
