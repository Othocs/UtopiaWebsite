import Link from "next/link";
import React from "react";

const JoinButton = () => {
  return (
    <Link href={"/contact"}>
      <button className="px-8 py-3 border border-[#380f43] hover:bg-[#380f43] active:text-white transition-all active:bg-[#380f43] hover:text-white">
        Contact Us
      </button>
    </Link>
  );
};

export default JoinButton;
