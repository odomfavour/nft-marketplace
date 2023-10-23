import MainLayout from "../components/layout/MainLayout";
import { useLocation } from "react-router-dom";

import ArtistHero from "../components/artist-ui/ArtistHero";
import ArtistInfo from "../components/artist-ui/ArtistInfo";
import Tabs from "../components/artist-ui/Tabs";
import DiscoverNFTs from "../components/DiscoverNFTs";
import NftCards from "../components/artist-ui/NftCard";
import NftCreated from "../components/artist-ui/NftCreated";
const ArtistPage = () => {
  // use useLocation read data form Checkout page
  const location = useLocation();
  const creator = location.state;

  return (
    <MainLayout>
      <ArtistHero />
      <ArtistInfo creator={creator} />
      <Tabs />
      <NftCreated />
    </MainLayout>
  );
};

export default ArtistPage;
