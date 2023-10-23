import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet";
import ArtistPage from "./pages/ArtistPage";
import Rankings from "./pages/Rankings";
import Nft from "./pages/Nft";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="/artist-page/:name" element={<ArtistPage />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/NFT" element={<Nft />} />
    </Routes>
  );
};

export default App;
