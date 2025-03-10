import React from "react";

import BackToTopButton from "../widgets/BackToTopButton";
import LinkOthmane from "../widgets/LinkOthmane";
import Socials from "./socials";

import ArrowIcon from "./arrowicon";

const Footer = () => {
  return (
    <>
      <nav className="  bg-[#cc8ce6] shadow-sm  bottom-0 w-full z-50 backdrop-blur-sm ">
        <div className="flex justify-between items-center w-[80%] h-20 mx-auto">
          <div className="flex gap-x-5 justify-center items-center">
            <Socials />
          </div>

          <div>
            <BackToTopButton />
          </div>
        </div>
        <div className="w-full bg-[#cc8ce6] h-10 pb-20 text-center flex justify-center align-middle text-[12px] gap-1">
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
