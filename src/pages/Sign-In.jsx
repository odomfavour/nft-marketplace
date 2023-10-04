import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SatBot from "../assets/SatBot.png"

const SignIn = () => {
  return(
    <>
      <Nav />
      
      <div>
        <img src={SatBot} alt="" />
      </div>

      <Footer />
    </>
  )
}

export default SignIn