import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Fade, Zoom } from "react-awesome-reveal";

const Whatwedo = () => {
  return (
    <>
      <Fade duration={1500} delay={1000}>
        <p className="text-2xl text-center mt-20">Our Domains Of Expertise</p>
      </Fade>
      <div
        className="w-[50%] mx-auto  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12
    flex flex-col justify-center mt-10 gap-5 "
      >
        <Zoom cascade triggerOnce delay={1000}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
          >
            <Image
              src={"/images/event.jpeg"}
              alt="event"
              width={500}
              height={500}
              className="w-full rounded-t-md"
            />
            <h1 className="font-semibold text-2xl text-white pt-3 pb-3 text-center">
              {" "}
              Events{" "}
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
          >
            <Image
              src={"/images/formation.png"}
              alt="formation"
              width={500}
              height={500}
              className="w-full rounded-t-md"
            />
            <h1 className="font-semibold text-2xl text-white pt-3 pb-3 text-center">
              {" "}
              Formation{" "}
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
          >
            <Image
              src={"/images/hackathon.png"}
              alt="hackathon"
              width={500}
              height={500}
              className="w-full rounded-t-md"
            />
            <h1 className="font-semibold text-2xl text-white pt-3 pb-3 text-center">
              {" "}
              Hackathon{" "}
            </h1>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
          >
            <Image
              src={"/images/comingsoon.png"}
              alt="hackathon"
              width={500}
              height={500}
              className="w-full rounded-t-md"
            />
            <h1 className="font-semibold text-2xl text-white pt-3 pb-3 text-center">
              {" "}
              Consulting{" "}
            </h1>
          </motion.div>
        </Zoom>
      </div>
    </>
  );
};

export default Whatwedo;
