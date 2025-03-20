import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Companies = () => {
  return (
    <>
      <div className="w-[80%] mx-auto text-center">
        <Fade triggerOnce duration={1500}>
          <p className="text-2xl ">Trusted by Leading Tech Companies </p>
        </Fade>
      </div>

      <div className="mx-auto w-[80%] grid grid-cols-2 gap-x-15 gap-y-0 items-center md:grid-cols-3 md:justify-between md:gap-x-25">
        <Fade triggerOnce cascade damping={0.2}>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/openai.png"
              width={130}
              height={130}
              alt="openai"
              className="mx-auto"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/mistral.png"
              width={68}
              height={68}
              alt="mistral"
              className="mx-auto"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/perplexity.png"
              width={130}
              height={130}
              alt="perplexity"
              className="mx-auto"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/snowflake.png"
              width={130}
              height={130}
              alt="snowflake"
              className="mx-auto"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/mirakl.png"
              width={130}
              height={130}
              alt="mirakl"
              className="mx-auto"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              src="/logos/kima.png"
              width={130}
              height={130}
              alt="kimaventures"
              className="mx-auto"
            />
          </motion.div>
        </Fade>
      </div>
    </>
  );
};

export default Companies;
