import eye from "../assets/images/home/eye.svg";
import { Link } from "react-router-dom";
import { NFTCollection } from "../utils/contents";

const DiscoverNFTs = () => {
  return (
    <section className="pt-[2.5rem] pb-[3.75rem] lg:pt-[5rem] md:pb-[5rem]">
      <div className="lg:w-10/12 w-11/12 mx-auto relative">
        <div className="font-WorkSans">
          <h2 className="text-[1.75rem] lg:text-[2.375rem] font-semibold leading-[140%] lg:leading-[120%] mb-[0.62rem]">
            Discover More NFTs
          </h2>
          <p className="text-base lg:text-[1.375rem] lg:leading-[160%] leading-[140%]">
            Explore New Trending NFTs
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-[1.25rem] md:gap-[1.88rem]  my-[2.5rem] md:mt-[2.5rem] lg:mt-[3.75rem] lg:mb-0">
          {NFTCollection.map((nft) => (
            <div key={nft.id} className={nft.display}>
              <div>
                <img
                  src={nft.img}
                  alt="Space"
                  className="w-full h-[14.876rem]"
                />
              </div>
              <div className="p-[1.25rem] pb-[1.56rem] bg-primaryBrown rounded-b-[1.25rem]">
                <h3 className="font-WorkSans text-[1.375rem] font-semibold leading-[140%] mb-[0.31rem]">
                  {nft.title}
                </h3>
                <div className="flex items-center gap-[0.75rem] mb-[1.56rem]">
                  <img src={nft.ownerAvatar} alt="Avatar" />
                  <p className="text-base leading-[140%]  font-SpaceMono">
                    {nft.ownerUsername}
                  </p>
                </div>
                <div className="flex items-start justify-between font-SpaceMono">
                  <div>
                    <h4 className="text-[0.75rem] text-[#858584] leading-[110%] mb-[0.5rem]">
                      Price
                    </h4>
                    <p className="text-[0.75rem] sm:text-base leading-[110%]">
                      {nft.price}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[0.75rem] text-[#858584] leading-[110%] mb-[0.5rem]">
                      Highest Bid
                    </h4>
                    <p className="text-[0.75rem] sm:text-base leading-[110%]">
                      {nft.highestBid}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:absolute top-0 right-0">
          <Link className="text-white text-base font-semibold font-WorkSans leading-[140%rem] flex items-center justify-center gap-[0.75rem]  border border-2 border-primaryPurple rounded-[1.25rem] md:w-[11.69rem] w-full h-[3.75rem]">
            <img src={eye} alt="Eye" />
            <span>See All</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFTs;
