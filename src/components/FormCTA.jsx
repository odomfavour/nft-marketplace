import React from "react";
import { Link } from "react-router-dom";

const FormCTA = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:relative md:w-[25rem] xl:w-full">
      <input className="w-full px-5 py-3 mb-4 rounded-full text-black outline-none border-none md:mb-0 md:py-4 md:rounded-[20px] xl:placeholder:text-sm" type="email" placeholder={props.text} />
      <Link to="#">
        <button className="w-full py-3 bg-[#a259ff] rounded-full text-md font-medium md:absolute md:w-[10rem] md:right-0 md:py-4 md:rounded-[20px]">
          <img src={props.img} alt="" />
          <p>Subscribe</p>
        </button>
      </Link>
    </div>
  )
}

export default FormCTA