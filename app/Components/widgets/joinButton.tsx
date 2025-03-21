"use client";
import React from "react";

const JoinButton = () => {
  const scrollToSocialDock = () => {
    // Navigate to home page if not already there
    if (window.location.pathname !== "/") {
      window.location.href = "/#connect-with-us";
    } else {
      // If already on home page, just scroll to the section
      const socialDockElement = document.getElementById("connect-with-us");
      if (socialDockElement) {
        socialDockElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={scrollToSocialDock}
      className="px-8 py-3 border border-[#380f43] hover:bg-[#380f43] active:text-white transition-all active:bg-[#380f43] hover:text-white"
    >
      Join Us
    </button>
  );
};

export default JoinButton;
