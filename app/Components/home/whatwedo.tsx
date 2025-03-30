import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Fade } from "react-awesome-reveal";

const Whatwedo = () => {
  return (
    <>
      <Fade triggerOnce duration={1500} fraction={0.9}>
        <p className="md:text-3xl text-2xl font-semibold  text-center mt-20">
          Our Domains Of Expertise
        </p>
      </Fade>
      <div
        className="w-[50%] mx-auto  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12
    flex flex-col justify-center mt-10 gap-5 "
      >
        <Fade cascade triggerOnce damping={0.2}>
          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
            >
              <Image
                src={"/affiches/Whatwedoaffiches/eventsc.jpg"}
                alt="event"
                width={500}
                height={500}
                className="w-full rounded-t-md"
              />
            </motion.div>
          </Link>

          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
            >
              <Image
                src={"/affiches/Whatwedoaffiches/trainingsc.jpg"}
                alt="formation"
                width={500}
                height={500}
                className="w-full rounded-t-md"
              />
            </motion.div>
          </Link>

          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
            >
              <Image
                src={"/affiches/Whatwedoaffiches/hackathonsc.jpg"}
                alt="hackathon"
                width={500}
                height={500}
                className="w-full rounded-t-md"
              />
            </motion.div>
          </Link>

          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
            >
              <Image
                src={"/affiches/Whatwedoaffiches/consultingc.jpg"}
                alt="hackathon"
                width={500}
                height={500}
                className="w-full rounded-t-md"
              />
            </motion.div>
          </Link>
        </Fade>
      </div>
    </>
  );
};

export default Whatwedo;
