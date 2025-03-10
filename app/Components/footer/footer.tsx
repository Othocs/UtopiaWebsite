import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <nav className="  bg-[#fcf2ff]/65 shadow-sm  bottom-0 w-full z-50 backdrop-blur-sm ">
      <div className="flex justify-between items-center w-[90%] h-32 mx-auto">
        <div className="flex gap-x-5 justify-center items-center">
          <Link
            href={
              "https://www.linkedin.com/company/utopia-essec/posts/?feedView=all"
            }
          >
            <FaLinkedin size={46} color="#380f43" />
          </Link>
          <Link href={"#"}>
            <AiFillInstagram size={55} color="#380f43" />
          </Link>
        </div>

        <div>yessir</div>
      </div>
    </nav>
  );
};

export default Footer;
