import { trendingCollections } from "../utils/contents";

const TrendingCollections = () => {
  return (
    <section className="bg-darkBrown lg:py-[5rem] text-white py-[2.5rem]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        <div className="mb-[2.5rem] lg:mb-[3.75rem]">
          <h2 className="text-[1.75rem] lg:text-[2.375rem] font-sans font-semibold leading-[140%] lg:leading-[120%] mb-[0.62rem] ">
            Trending Collection
          </h2>
          <p className="text-base lg:text-[1.375rem] font-sans leading-[140%] lg:leading-[160%]">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>
        <div className="flex md:items-start md:justify-between justify-center  md:flex-row flex-col gap-[1.88rem]">
          {
            trendingCollections.map(collection => {
              const {id, title, image, NFTs, owner, display} = collection
              return (
                <div key={id} className={display}>
                <div className="mb-[0.94rem]">
                  <img src={image} alt={title} className="w-full" />
                </div>
                <div className="flex items-center justify-between gap-[0.94rem] mb-[0.94rem]">
                  <img src={NFTs[0]} alt="Rat NFT" className="w-1/3 h-[5.9rem]" />
                  <img src={NFTs[1]} alt="" className="w-1/3 h-[5.9rem]" />
                  <div className="bg-[#A259FF] rounded-[1.25rem]  flex items-center justify-center w-1/3 h-[5.9rem]">
                    <p className="text-base font-bold font-mono leading-[140%] px-[0.94rem] py-[2rem]">1025+</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.375rem] font-sans font-semibold leading-[140%] mb-[0.62rem]">{title}</h3>
                  <div className="flex items-center gap-[0.75rem]">
                    <img src={owner.profilePicture} alt="" />
                    <p className="text-base font-sans leading-[140%]">{owner.username}</p>
                  </div>
                </div>
              </div>

              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default TrendingCollections;
