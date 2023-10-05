import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HowItWork from "../components/HowItWork";
import Mushrooms from "../components/Mushrooms";
import DiscoverNFTs from "../components/DiscoverNFTs";
import Categories from "../components/Categories";
import TopCreators from "../components/TopCreators";
import TrendingCollections from "../components/TrendingCollections";
import Subscribe from "../components/Subscribe";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Nav />
      <main className="bg-darkBrown text-white">
        <Hero />
        <TrendingCollections />
        <TopCreators />
        <Categories />
        <DiscoverNFTs />
        <Mushrooms />
        <HowItWork />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Home;