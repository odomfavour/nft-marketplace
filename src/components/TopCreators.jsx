import { Link } from "react-router-dom";
import { creators } from "../utils/contents";
import rocketLaunch from "../assets/images/home/rocketLaunch.svg";

const TopCreators = () => {
  return (
    <section className="bg-darkBrown text-white py-[2.5rem] xl:py-[5rem]">
      <div className="lg:w-10/12 w-11/12 mx-auto relative font-WorkSans">
        <div className="text-white">
          <h2 className="text-[1.75rem] xl:text-[2.375rem] font-semibold mb-[0.62rem] leading-[140%] xl:leading-[120%]">
            Top Creators
          </h2>
          <p className="text-base text-[1.375rem] leading-[140%] xl:leading-[160%] max-w-[40rem]">
            Checkout Top Rated Creators On The NFT Marketplace
          </p>
        </div>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[1.25rem] md:gap-[1.88rem] lg:gap-[2.8rem] my-[2.5rem] xl:mt-[3.75rem] xl:mb-0">
          {creators.map((creator) => (
            <Link key={creator.id} className={creator.display}>
              <div className="relative bg-[#3B3B3B] text-white p-[1.25rem] rounded-[1.25rem] flex xl:flex-col   items-center gap-[1.25rem] ">
                <div className="relative w-1/3 xl:w-full">
                  <p className="w-[1.875rem] h-[1.875rem] rounded-[1.25rem] bg-darkBrown font-SpaceMono text-base text-[#858584] flex items-center justify-center absolute left-[-0.15rem] top-[0.3rem]">
                    {creator.id}
                  </p>
                  <img
                    src={creator.profilePicture}
                    alt="Space"
                    className="mx-auto"
                  />
                </div>
                <div className="w-2/3 xl:w-full">
                  <h3 className="xl:text-center font-WorkSans text-[1.375rem] font-semibold leading-[140%] mb-[0.62rem]">
                    {creator.username}
                  </h3>
                  <div className="flex items-center xl:justify-between gap-[0.62rem]">
                    <h4 className="font-sans text-base text-[#858584] leading-[140%]">
                      Total Stake:
                    </h4>
                    <p className="font-SpaceMono text-base text-white leading-[140%]">
                      {creator.totalStake}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="sm:absolute top-[0.75rem] xl:top-[1.05rem] right-0">
          <Link className="text-white text-base font-semibold font-sans leading-[140%rem] flex items-center justify-center gap-[0.75rem]  border border-2 border-primaryPurple rounded-[1.25rem] md:w-[15.43rem] sm:w-[11rem]  w-full h-[3.75rem]">
            <img src={rocketLaunch} alt="Rocket launch" />
            <span>View Rankings</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
