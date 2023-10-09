import MainLayout from "../components/layout/MainLayout";
import { useLocation } from "react-router-dom";
const ArtistPage = () => {
  // use useLocation read data form Checkout page
  const location = useLocation();
  const creator = location.state;

  return (
    <MainLayout>
      {/* Hello World
      <div> {creator.username}</div>
      <img src={creator.profilePicture} alt="" /> */}
    </MainLayout>
  );
};

export default ArtistPage;
