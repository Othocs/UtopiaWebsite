"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Fade } from "react-awesome-reveal";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  const [iconSize, setIconSize] = useState(100);
  const [iconMagnification, setIconMagnification] = useState(120);

  useEffect(() => {
    // Function to update sizes based on screen width
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        // Mobile screens
        setIconSize(50);
        setIconMagnification(65);
      } else {
        // Larger screens
        setIconSize(100);
        setIconMagnification(120);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mb-10" id="connect-with-us">
      <div className="w-[80%] mx-auto text-center">
        <Fade triggerOnce>
          <p className="text-3xl font-semibold ">Connect With Us !</p>
        </Fade>
      </div>
      <Fade triggerOnce>
        <div className="relative">
          <Dock
            direction="middle"
            iconSize={iconSize}
            iconMagnification={iconMagnification}
            className="h-20 my-2"
          >
            <DockIcon
              onClick={() =>
                openInNewTab("https://www.linkedin.com/company/utopia-essec/")
              }
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={iconSize}
                  height={iconSize}
                  className="w-full h-full object-contain"
                />
              </div>
            </DockIcon>
            <DockIcon
              onClick={() =>
                openInNewTab(
                  "https://www.instagram.com/utopia.essec?igsh=MTlqa2tzdjdqa2dqdw%3D%3D&utm_source=qr"
                )
              }
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/icons/insta.png"
                  alt="Instagram"
                  width={iconSize}
                  height={iconSize}
                  className="w-full h-full object-contain"
                />
              </div>
            </DockIcon>
            <DockIcon
              onClick={() =>
                openInNewTab("https://chat.whatsapp.com/IbzUW3yjQ3xFD1I2BZgabL")
              }
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp"
                  width={iconSize}
                  height={iconSize}
                  className="w-full h-full object-contain"
                />
              </div>
            </DockIcon>
          </Dock>
        </div>
      </Fade>
    </div>
  );
}
