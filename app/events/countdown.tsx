"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Countdowncomp = () => {
  // Using state to only render the countdown on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect only runs on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return placeholder with same structure but no actual values on server
    return (
      <span className="text-[#380f43] md:text-7xl text-5xl">Loading...</span>
    );
  }

  return <Countdown date={"2025-04-04T19:00:00"} />;
};

export default Countdowncomp;

// This is a single-line comment
