import React from "react";

const FormCTA = (props) => {
  return (
    <div className="flex flex-col">
      <input className="w-full px-5 py-3 mb-4 rounded-full text-black outline-none border-none" type="email" placeholder={props.text} />
      <button className="w-full py-3 bg-[#a259ff] rounded-full text-md font-medium">
        <img src={props.img} alt="" />
        <p>Subscribe</p>
      </button>
    </div>
  )
}

export default FormCTA