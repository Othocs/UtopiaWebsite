import React from "react";

const ScrollDownIndicator = () => {
  return (
    <div className="absolute bottom-4 md:bottom-8 w-full flex justify-center z-10">
      <div className="flex flex-col items-center  py-2 px-4 animate-bounce">
        <p className="text-xs md:text-sm text-[#380f43] mb-1 md:mb-2 font-medium">
          Scroll Down
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#380f43]"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
