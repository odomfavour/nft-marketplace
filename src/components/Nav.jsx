import React from "react";
import { Link } from "react-router-dom"
import { navLinks } from "../utils/navLinks"
import LogoIcon from "../assets/Storefront.svg"
import User from "../assets/User.svg"

const Nav = () => {
  return(
    <header className="bg-[rgb(43,43,43)] text-white">
      <nav className="py-4 px-6 lg:flex">
        <div className="mr-auto flex items-center gap-x-3">
          <img src={LogoIcon} alt="" />
          <h3 className="font-SpaceMono font-bold text-xl">NFT Marketplace</h3>
        </div>
        <div className="flex gap-x-8 items-center font-WorkSans">
          <ul className="flex gap-x-10">
            {navLinks.map((navLink) => {
              const {id, url, name} = navLink;
              return (
                <li className="text-sm hover:text-[#a259ff] transition ease-in-out delay-70" key={id}>
                  <Link className="py-3" to={url}>{name}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="#">
            <div className="flex gap-x-2 items-center bg-[#a259ff] hover:bg-[#9353e5] transition ease-in-out delay-70 py-3 px-5 rounded-xl">
              <img className="h-4" src={User} alt="" />
              <p className="text-xs font-semibold">Sign Up</p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav