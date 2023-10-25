import { useState, useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import "./navigation.css";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="navbar fixed z-20 flex w-full items-center justify-between bg-[#0F0F0F] pr-8 opacity-90">
      <div className="p-4 font-bold">LOGO</div>
      <AiOutlineMenu
        className="cursor-pointer text-2xl text-gray-400 transition duration-300 hover:text-white md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div
        className={`navigation-link-container relative gap-4 md:flex ${
          isOpen ? "left-0" : "left-full md:left-0"
        }`}
      >
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#home">
          <span className="font-bold">HOME</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#aboutus">
          <span className="font-bold">ABOUT US</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#product">
          <span className="font-bold">OUR PRODUCT</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#contact">
          <span className="font-bold">CONTACT</span>
        </a>
        <a className="navigation-link p-1 pl-4 pr-4 max-md:p-4" href="#program">
          <span className="font-bold">PROGRAM</span>
        </a>
        
      </div>
    </div>
  );
}

export default NavigationBar;
