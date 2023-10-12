import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet";
import Rankings from "./pages/Rankings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="/rankings" element={<Rankings />} />
    </Routes>
  );
};

export default App;
