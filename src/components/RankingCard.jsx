import propTypes from "prop-types";

const RankingCard = ({ data }) => {
  return (
    <>
      <div className="flex px-5 py-2 mt-10 border-[1px] rounded-3xl text-sm md:text-base font-SpaceMono opacity-50">
        <span className="ml-[10px] mr-[16px]">#</span>
        <div className="w-full grid grid-cols-5">
          <span className="col-span-4 md:col-span-3 lg:col-span-2">Artist</span>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
            <span className="hidden md:flex">Change</span>
            <span className="hidden lg:flex">NFTs Sold</span>
            <span className="">Volume</span>
          </div>
        </div>
      </div>

      <div>
        {data.map((each) => {
          const { id, name, change, nftsSold, volume, img } = each;
          return (
            <div
              key={id}
              className="flex items-center bg-[#3B3B3B] border px-5 py-3 my-5 rounded-xl font-SpaceMono"
            >
              <span className="bg-[#2B2B2B] font-normal text-xs md:text-base border px-[8px] py-[1px] rounded-full">
                {id}
              </span>
              <div className="w-full grid grid-cols-5">
                <div className="col-span-4 md:col-span-3 lg:col-span-2 px-3">
                  <div className="flex items-center space-x-3">
                    <img src={img} alt="" className="w-[15%]" />
                    <div className="font-semibold text-base md:text-xl">
                      {name}
                    </div>
                  </div>
                </div>
                <div className="hidden md:grid col-span-1 place-content-center font-normal text-xs md:text-base text-[#00ACAF]">
                  +{change}%
                </div>
                <div className="hidden lg:grid col-span-1 place-content-center font-normal text-xs md:text-base">
                  {nftsSold}
                </div>
                <div className="grid col-span-1 place-content-center font-normal text-xs md:text-base">
                  {volume} ETH
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

RankingCard.propTypes = {
  data: propTypes.array,
};

export default RankingCard;
