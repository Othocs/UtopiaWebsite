"use client";
import React from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Socials() {
  const [color1, setColor1] = useState("#380f43");
  const [color2, setColor2] = useState("#380f43");

  return (
    <>
      <Link
        href={
          "https://www.linkedin.com/company/utopia-essec/posts/?feedView=all"
        }
        target="_blank"
      >
        <FaLinkedin
          size={40}
          color={color1}
          onMouseDown={() => setColor1("#f8e3ff")}
          onMouseOver={() => setColor1("#f8e3ff")}
          onMouseUp={() => setColor1("#380f43")}
          onMouseOut={() => setColor1("#380f43")}
          className="cursor-pointer"
        />
      </Link>

      <Link href={"#"} target="_blank">
        <AiFillInstagram
          size={45}
          color={color2}
          onMouseDown={() => setColor2("#f8e3ff")}
          onMouseOver={() => setColor2("#f8e3ff")}
          onMouseUp={() => setColor2("#380f43")}
          onMouseOut={() => setColor2("#380f43")}
          className="cursor-pointer"
        />
      </Link>
    </>
  );
}
