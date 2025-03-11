import React from "react";

const MiddleNav = () => {
  return (
    <div className="hidden md:flex gap-8 text-lg text-[#380f43] font-semibold">
      <div className="hover:text-[#b35fd6] cursor-pointer font-custom">
        Events
      </div>
      <div className="hover:text-[#b35fd6] cursor-pointer">Formations</div>
      <div className="hover:text-[#b35fd6] cursor-pointer">Hackathons</div>
      <div className="hover:text-[#b35fd6] cursor-pointer">Consulting</div>
    </div>
  );
};

export default MiddleNav;
