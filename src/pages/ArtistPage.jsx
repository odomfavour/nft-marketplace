import MainLayout from "../components/layout/MainLayout";
import { useLocation } from "react-router-dom";

import ArtistHero from "../components/artist-ui/ArtistHero";
import ArtistInfo from "../components/artist-ui/ArtistInfo";
const ArtistPage = () => {
  // use useLocation read data form Checkout page
  const location = useLocation();
  const creator = location.state;

  return (
    <MainLayout>
      <ArtistHero />
      <ArtistInfo creator={creator} />
    </MainLayout>
  );
};

export default ArtistPage;
