import { NftCreatedByArtist } from "../../utils/contents";
import NftCards from "./NftCard";

const NftCreated = () => {
  return (
    <section className=" bg-primaryBrown px-10 py-10 ">
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-9 ">
        {NftCreatedByArtist.map((nft) => (
          <NftCards item={nft} key={nft.id} />
        ))}
      </div>
    </section>
  );
};

export default NftCreated;
