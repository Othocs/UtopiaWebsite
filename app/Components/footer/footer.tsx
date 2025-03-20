import React from "react";

import LinkOthmane from "./LinkOthmane";

import ArrowIcon from "./arrowicon";

const Footer = () => {
  return (
    <>
      <nav className="  bg-[#cc8ce6] shadow-sm  bottom-0 w-full z-50 backdrop-blur-sm ">
        <div className="w-full bg-[#cc8ce6] h-16 text-center flex justify-center align-middle items-center text-[12px] gap-1">
          <p>
            Made by <LinkOthmane />
          </p>
          <ArrowIcon />
        </div>
      </nav>
    </>
  );
};

export default Footer;
