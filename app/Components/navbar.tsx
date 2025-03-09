import React from "react";
import Image from "next/image";
import JoinButton from "./widgets/joinButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  bg-[#fcf2ff]/65 shadow-sm fixed top-0 w-full z-50 backdrop-blur-sm ">
      <div className="flex justify-between items-center w-[90%] h-16 mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src="/utopia.png"
              alt="..."
              width={50}
              height={50}
              className="shrink-0 min-w-[50px]"
            />
          </Link>
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
          <JoinButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
