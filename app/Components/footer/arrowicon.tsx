"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export default function ArrowIcon() {
  const [color1, setColor1] = useState("#380f43");

  return (
    <>
      <Link
        href={"https://www.linkedin.com/in/othmane-menkor/"}
        target="_blank"
      >
        <LuExternalLink
          size={10}
          color={color1}
          onMouseDown={() => setColor1("#f8e3ff")}
          onMouseOver={() => setColor1("#f8e3ff")}
          onMouseUp={() => setColor1("#380f43")}
          onMouseOut={() => setColor1("#380f43")}
          className="cursor-pointer"
        />
      </Link>
    </>
  );
}
