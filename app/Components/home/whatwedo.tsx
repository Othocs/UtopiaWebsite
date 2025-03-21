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
          </Link>

          <Link href="/events">
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
                Trainings{" "}
              </h1>
            </motion.div>
          </Link>

          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#b35fd6] rounded-md shadow-md border-[#cc8ce6] border-4 hover:border-[#d058ff]"
            >
              <Image
                src={"/affiches/affiches_hack/hack_2.png"}
                alt="hackathon"
                width={500}
                height={500}
                className="w-full rounded-t-md"
              />
              <h1 className="font-semibold text-2xl text-white pt-3 pb-3 text-center">
                {" "}
                Hackathons{" "}
              </h1>
            </motion.div>
          </Link>

          <Link href="/events">
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
          </Link>
        </Fade>
      </div>
    </>
  );
};

export default Whatwedo;
