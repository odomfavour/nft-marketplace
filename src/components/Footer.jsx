import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks"
import LogoIcon from "../assets/Storefront.svg"
import Instagram from "../assets/Instagram.svg"
import Youtube from "../assets/Youtube.svg"
import Twitter from "../assets/Twitter.svg"
import Discord from "../assets/Discord.svg"
import FormCTA from "./FormCTA";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] px-6 text-white font-WorkSans">
      <div className="pb-8 border-b-[2px] border-gray-500">
        <div className="mb-8">
          <div className="mr-auto flex items-center gap-x-3 mb-6">
            <img src={LogoIcon} alt="" />
            <h3 className="font-SpaceMono font-bold text-xl">NFT Marketplace</h3>
          </div>
          <p className="w-11/12 text-gray-300 mb-5">NFT marketplace UI created with Anima for Figma.</p>
          <div>
            <p className="text-gray-300 mb-4">Join our community</p>
            <div className="flex gap-x-2">
              <img src={Discord} alt="" />
              <img src={Youtube} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-SpaceMono font-bold text-xl mb-4">Explore</h3>
          <ul>
            {navLinks.map((navLink => {
              const {id, url, name} = navLink;
              return (
                <li className="my-5 text-gray-300" key={id}>
                  <Link className="" to={url}>{name}</Link>
                </li>
              )
            }))}
          </ul>
        </div>

        <div>
          <h3 className="font-SpaceMono font-bold text-xl mb-4">Join our weekly digest</h3>
          <p className="text-gray-300 w-11/12 mb-6">Get exclusive promotions & updates straight to your inbox.</p>
          <FormCTA text="Enter Your Email Address" />
        </div>
      </div>
      <p className="mt-5 pb-8 text-sm text-gray-400">&copy; NFT Market. Use this template freely.</p>
    </footer>
  )
}

export default Footer