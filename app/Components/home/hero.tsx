import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import JoinButton from "../widgets/joinButton";
const Herotwo = () => {
  return (
    <div className=" h-screen max-w-[80%] md:max-w-[80%] mx-auto flex flex-col md:gap-y-3 gap-y-5 text-[#380f43] justify-center items-center pb-15">
      <div className="flex flex-col-reverse md:gap-x-15 md:flex-row mx-auto w-full items-center justify-between">
        {/* Bigger screens */}
        <div className="hidden md:block">
          <Fade direction="left" triggerOnce>
            <div className="flex flex-col gap-5 text-center md:text-left">
              <p className=" text-5xl md:text-7xl ">
                Bringing AI to the Next Generation of Business Leaders.
              </p>

              <p className="hover:text-[#b35fd6] ">
                Discover the #1 AI association of ESSEC Business School
              </p>
            </div>
          </Fade>
        </div>

        {/* Smaller screens */}
        <div className="block md:hidden">
          <Fade triggerOnce>
            <div className="flex flex-col gap-5 text-center md:text-left">
              <p className=" text-5xl md:text-7xl ">
                Bringing AI to the Next Generation of Business Leaders.
              </p>

              <p className="hover:text-[#b35fd6] ">
                Discover the #1 AI association of ESSEC Business School
              </p>
            </div>
          </Fade>
        </div>

        <Fade direction="right" triggerOnce delay={500}>
          <Image
            src={"/logos/bigutopia.png"}
            alt="utopia"
            width={200}
            height={200}
            className=" md:flex shrink-0 md:min-w-[350px] md:min-h-[350px] "
          />
        </Fade>
      </div>
      <div className="block">
        <Fade delay={1000} duration={1200} triggerOnce>
          <JoinButton />
        </Fade>
      </div>
    </div>
  );
};

export default Herotwo;
