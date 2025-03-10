"use client";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [color, setColor] = useState("#380f43");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FaArrowUp
      color={color}
      size={35}
      onClick={scrollToTop}
      onMouseDown={() => setColor("#f8e3ff")}
      onMouseOver={() => setColor("#f8e3ff")}
      onMouseUp={() => setColor("#380f43")}
      onMouseOut={() => setColor("#380f43")}
      className="cursor-pointer"
    />
  );
}
