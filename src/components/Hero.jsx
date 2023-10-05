import { Link } from "react-router-dom";
import { RocketIcon } from "../utils/icons";
import spaceWalking from "../assets/images/home/spaceWalking.png";
import animalKidAvatar from "../assets/images/home/animalKidAvatar.png";

const Hero = () => {
  return (
    <section className="bg-darkBrown text-white md:py-[5rem] py-[2.5rem]">
      <div className="lg:w-10/12 w-11/12 mx-auto relative ">
        <div className="flex flex-col gap-[2.5rem] md:gap-[1.25rem] md:pr-[1.88rem] relative">
          <div className="md:w-1/2 ">
            <h1 className="capitalize xl:text-[4.1875rem] md:text-[2.375rem] text-[1.75rem] font-sans font-semibold leading-[140%] md:leading-[120%] lg:leading-[120%] md:mb-[1.25rem] mb-[0.62rem]">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="capitalize lg:text-[1.375rem] text-base font-sans leading-[140%] lg:leading-[160%]">
              NFT Marketplace UI Created With Anima For Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>
          <div className=" md:w-1/2 md:absolute right-0 top-[0rem] md:pl-[1.88rem] flex flex-col ">
            <div className="">
              <img src={spaceWalking} alt="Space" className="w-full md:max-h-[13.8125rem] xl:max-h-[25.0625rem] lg:max-h-[20.0625rem]" />
            </div>
            <div className="p-[1.25rem] bg-primaryBrown text-white rounded-b-[1.25rem]">
              <h3 className="font-sans text-[1.375rem] font-semibold leading-[140%] mb-[0.62rem]">
                Space Walking
              </h3>
              <div className="flex items-center gap-[0.75rem]">
                <img src={animalKidAvatar} alt="Animal Kid Avatar" />
                <p className="font-sans text-base leading-[140%]">Animakid</p>
              </div>
            </div>
          </div>
          <Link className="text-white text-base font-semibold font-sans leading-[1.4rem] flex items-center justify-center gap-[0.75rem] lg:px-[3.125rem] bg-[#A259FF]  lg:h-[3.75rem] rounded-[1.25rem] md:w-[14rem] w-full h-[3.75rem]">
            <RocketIcon />
            <span>Get Started</span>
          </Link>
          <div className="md:w-1/2 xl:w-2/5  flex items-center justify-between">
            <div>
              <h3 className="font-mono lg:text-[1.75rem] text-[1.375rem] font-bold leading-[160%]">
                240k+
              </h3>
              <p className="lg:text-[1.5rem] text-base font-sans leading-[140%]">
                Total Sale
              </p>
            </div>
            <div>
              <h3 className="font-mono lg:text-[1.75rem] text-[1.375rem] font-bold leading-[160%]">
                100k+
              </h3>
              <p className="lg:text-[1.5rem] text-base font-sans leading-[140%]">
                Auctions
              </p>
            </div>
            <div>
              <h3 className="font-mono lg:text-[1.75rem] text-[1.375rem] font-bold leading-[160%]">
                240k+
              </h3>
              <p className="lg:text-[1.5rem] text-base font-sans leading-[140%]">
                Artists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
