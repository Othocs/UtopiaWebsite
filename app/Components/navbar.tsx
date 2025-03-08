import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="  bg-[#fcf2ff] shadow-sm fixed top-0 w-full z-50 ">
      <div className="flex justify-between items-center w-[90%] h-16 mx-auto">
        <div>
          <Image
            src="/utopia.png"
            alt="..."
            width={50}
            height={50}
            className="shrink-0 min-w-[50px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg text-[#380f43] font-semibold">
          <div className="hover:text-[#b35fd6] cursor-pointer font-custom">
            Events
          </div>
          <div className="hover:text-[#b35fd6] cursor-pointer">Formations</div>
          <div className="hover:text-[#b35fd6] cursor-pointer">Hackathons</div>
          <div className="hover:text-[#b35fd6] cursor-pointer">Consulting</div>
        </div>

        <div>
          <button className="bg-[#b35fd6] hover:bg-[#963fb6] text-white px-4 py-2 rounded-full whitespace-nowrap min-w-fit">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
