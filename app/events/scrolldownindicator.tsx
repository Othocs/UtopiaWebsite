import React from "react";

const ScrollDownIndicator = () => {
  return (
    <div className="absolute bottom-8 animate-bounce">
      <div className="flex flex-col items-center">
        <p className="text-sm text-[#380f43] mb-2">Scroll Down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
