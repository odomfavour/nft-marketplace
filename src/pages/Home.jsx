import HowItWork from "../components/HowItWork";
import Mushrooms from "../components/Mushrooms";
import DiscoverNFTs from "../components/DiscoverNFTs";
import Categories from "../components/Categories";
import TopCreators from "../components/TopCreators";
import TrendingCollections from "../components/TrendingCollections";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <TrendingCollections />
        <TopCreators />
        <Categories />
        <DiscoverNFTs />
        <Mushrooms />
        <HowItWork />
        <Subscribe />
      </MainLayout>
    </>
  );
};

export default Home;
