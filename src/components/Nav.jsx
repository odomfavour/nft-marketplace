import React, { useState } from "react";
import { Link } from "react-router-dom"
import { navLinks } from "../utils/navLinks"
import LogoIcon from "../assets/Storefront.svg"
import User from "../assets/User.svg"
import Ham from "../assets/hamburger.svg"

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  const toggleHamburger = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const disableHamburger = () => {
    setToggle(false);
  }

  return(
    <header className="bg-[rgb(43,43,43)] text-white">
      <nav className="py-4 px-6 relative flex items-center lg:py-0 max-[360px]:px-2">
        <div className="mr-auto flex items-center gap-x-3">
          <img src={LogoIcon} alt="" />
          <h3 className="font-SpaceMono font-bold text-xl">NFT Marketplace</h3>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleHamburger}>
          <img src={Ham} alt="" />
        </div>

        <div className={`${toggle ? 'visible' : 'invisible'} font-WorkSans absolute top-[4rem] right-0 bg-[#2b2b2b] w-full pt-4 pb-10 px-7 lg:visible lg:static lg:flex lg:items-center lg:gap-6 lg:justify-end lg:p-0 lg:w-auto max-[360px]:px-2`}>
          <ul className="lg:flex gap-x-4">
            {navLinks.map((navLink) => {
              const {id, url, name} = navLink;
              return (
                <li className="text-sm hover:text-[#a259ff] transition ease-in-out delay-70 my-6" key={id}>
                  <Link className="py-3" to={url} onClick={disableHamburger}>{name}</Link>
                </li>
              )
            })}
          </ul>
          <button className="flex gap-x-2 items-center bg-[#a259ff] hover:bg-[#9353e5] py-3 px-5 rounded-xl w-3/4 md:w-1/3 lg:w-auto max-[400px]:w-full" onClick={disableHamburger}>
            <img className="h-4" src={User} alt="" />
            <p className="text-xs font-semibold">Sign Up</p>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav