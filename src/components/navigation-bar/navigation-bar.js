import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import "./navigation.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex w-full items-center justify-between bg-[#0F0F0F] pr-8 fixed z-20 opacity-90">
      <div className="font-bold p-4">LOGO</div>
      <AiOutlineMenu className="text-2xl md:hidden cursor-pointer text-gray-400 hover:text-white transition duration-300" onClick={() => {setIsOpen(!isOpen)}}/>
      <div className={`navigation-link-container relative md:flex gap-4 ${isOpen ? "left-0" : "left-full md:left-0"}`}>
        <div className="navigation-link p-1 pl-4 pr-4 max-md:p-4">
          <a className="font-bold" href="#home">
            HOME
          </a>
        </div>
        <div className="navigation-link p-1 pl-4 pr-4 max-md:p-4">
          <a className="font-bold" href="#aboutus">
            ABOUT US
          </a>
        </div>
        <div className="navigation-link p-1 pl-4 pr-4 max-md:p-4">
          <a className="font-bold" href="#product">
            OUR PRODUCT
          </a>
        </div>
        <div className="navigation-link p-1 pl-4 pr-4 max-md:p-4">
          <a className="font-bold" href="#contact">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
