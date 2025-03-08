import React from "react";
import Image from "next/image";
const Herotwo = () => {
  return (
    <div className="max-w-[80%] md:max-w-[80%] mx-auto flex md:gap-x-15 text-[#380f43] justify-between items-center pb-15">
      <div className="flex flex-col gap-5 text-center md:text-left">
        <p className=" text-5xl md:text-7xl ">
          Bringing AI to the Next Generation of Business Leaders.
        </p>

        <p className="hover:text-[#b35fd6] ">
          Discover the #1 AI association of ESSEC Business School
        </p>
      </div>

      <Image
        src={"/logos/bigutopia.png"}
        alt="utopia"
        width={350}
        height={350}
        className="hidden md:flex shrink-0 min-w-[350px] min-h-[350px]"
      />
    </div>
  );
};

export default Herotwo;
