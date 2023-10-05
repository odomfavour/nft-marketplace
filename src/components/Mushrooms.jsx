import { Link } from "react-router-dom";
import avatar from "../assets/images/home/avatar-m.png";
import eye from "../assets/images/home/eye.svg";

const Mushrooms = () => {
  return (
    <section className="bg-[url('/src/assets/images/home/mushroom-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="lg:pt-[22rem] pt-[7.5rem] pb-[2.5rem] lg:pb-[2.5rem] bg-gradient-to-b from-gradientBG to-[#A259FF]">
        <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col relative font-WorkSans">
          <div>
            <p className="w-[9.744rem] px-[1.25rem] rounded-[1.25rem] py-[0.62rem] text-base text-white leading-[140%] flex items-center justify-center gap-[0.75rem] bg-primaryBrown">
              <img src={avatar} alt="Avatar" />
              <span>Shroomie</span>
            </p>
            <h2 className="text-white text-[2.375rem] lg:text-[3.188rem] leading-[120%] my-[1.88rem] font-semibold">
              Magic Mushrooms
            </h2>
          </div>
          <div className="font-SpaceMono text-white bg-shadowBG p-[1.88rem] rounded-[1rem] md:absolute right-0 bottom-0">
            <p className="text-[0.75rem] leading-[110%] mb-[0.62rem]">
              Auction ends in:
            </p>
            <ul className="flex justify-between gap-[0.62rem]">
              <li>
                <h3 className="text-[2.375rem] font-bold leading-[120%]">59</h3>
                <p className="text-[0.75rem] leading-[110%]">Hours</p>
              </li>
              <li>
                <h3 className="text-[2.375rem] font-bold leading-[120%]">:</h3>
              </li>
              <li>
                <h3 className="text-[2.375rem] font-bold leading-[120%]">59</h3>
                <p className="text-[0.75rem] leading-[110%]">Minutes</p>
              </li>
              <li>
                <h3 className="text-[2.375rem] font-bold leading-[120%]">:</h3>
              </li>
              <li>
                <h3 className="text-[2.375rem] font-bold leading-[120%]">59</h3>
                <p className="text-[0.75rem] leading-[110%]">Seconds</p>
              </li>
            </ul>
          </div>
          <Link className="w-full md:w-[12.375rem] text-base font-semibold font-sans leading-[140%] flex items-center justify-center gap-[0.75rem] px-[1.38rem] md:px-[1.38rem] bg-white  lg:h-[3.75rem] rounded-[1.25rem] h-[3rem] my-[1.88rem] md:my-0">
            <img src={eye} alt="Eye" />
            <span>See NFT</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mushrooms;
