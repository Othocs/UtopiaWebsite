"use client";
import React from "react";
import Image from "next/image";
import JoinButton from "../widgets/joinButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="  bg-[#fcf2ff]/65 shadow-sm fixed top-0 w-full z-40 backdrop-blur-sm ">
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

        <div className="flex gap-x-10">
          <Link
            href={"/events"}
            className="hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 text-lg transition-colors hover:bg-[#380f43] hover:text-neutral-100 text-[#380f43]"
          >
            Our Events
          </Link>
          <Link
            href={"#"}
            className="hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 text-lg transition-colors hover:bg-[#380f43] hover:text-neutral-100 text-[#380f43]"
          >
            Meet the Team
          </Link>
          <JoinButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
