"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Slider from "react-infinite-logo-slider";

const InfiniteLogoSlider = () => {
  return (
    <>
      <Fade triggerOnce cascade>
        <div className="w-[80%] mx-auto text-center mb-15">
          <p className="text-3xl font-semibold ">
            Trusted by Leading Tech Companies{" "}
          </p>
        </div>

        <Slider
          width="250px"
          duration={28}
          pauseOnHover={false}
          blurBorders={true}
          blurBorderColor={"#fcf2ff"}
        >
          <Slider.Slide>
            <Image
              src="/logos/openai.png"
              alt="openai"
              width={140}
              height={140}
            />
          </Slider.Slide>
          <Slider.Slide>
            <div className="w-[145px] h-[145px] flex items-center ">
              <Image
                src="/logos/mistral.png"
                alt="mistral"
                width={70}
                height={70}
                className="mx-auto my-auto"
              />
            </div>
          </Slider.Slide>
          <Slider.Slide>
            <Image
              src="/logos/perplexity.png"
              alt="perplexity"
              width={145}
              height={145}
            />
          </Slider.Slide>
          <Slider.Slide>
            <Image
              src="/logos/snowflake.png"
              alt="snowflake"
              width={120}
              height={120}
            />
          </Slider.Slide>
          <Slider.Slide>
            <Image
              src="/logos/mirakl.png"
              alt="mirakl"
              width={120}
              height={120}
            />
          </Slider.Slide>
          <Slider.Slide>
            <Image
              src="/logos/kima.png"
              alt="kimaventures"
              width={120}
              height={120}
            />
          </Slider.Slide>
        </Slider>
      </Fade>
    </>
  );
};

export default InfiniteLogoSlider;
