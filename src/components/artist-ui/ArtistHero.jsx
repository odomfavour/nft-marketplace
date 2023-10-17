import ArtistPageHero from "../../assets/images/artistpage/artistpage-hero.png";
import CreatorAsset from "../../assets/images/artistpage/creatorAsset.png";
const ArtistHero = () => {
  return (
    <div className=" bg-darkBrown">
      <div
        className="  bg-no-repeat  bg-center md:bg-auto lg:bg-cover h-80"
        style={{
          backgroundImage: `url(${ArtistPageHero})`,
          //   backgroundSize: "100% 100%",
        }}
      ></div>
      <div className=" px-10 ">
        <div className="-mt-16 w-[120px] h-[120px ] overflow-hidden  rounded-3xl border-2  border-transparent bg-darkBrown ">
          <img src={CreatorAsset} alt="" className=" w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ArtistHero;
