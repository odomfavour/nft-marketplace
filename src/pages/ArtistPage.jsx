import MainLayout from "../components/layout/MainLayout";
import { useLocation } from "react-router-dom";

import ArtistHero from "../components/artist-ui/ArtistHero";
const ArtistPage = () => {
  // use useLocation read data form Checkout page
  const location = useLocation();
  const creator = location.state;

  return (
    <MainLayout>
      <ArtistHero />
    </MainLayout>
  );
};

export default ArtistPage;
