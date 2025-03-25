"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import JoinButton from "../widgets/joinButton";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add extra shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`bg-[#fcf2ff]/65 fixed top-0 w-full z-40 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center w-[90%] h-16 mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src="/utopia.png"
              alt="..."
              width={50}
              height={50}
              className="shrink-0 min-w-[50px] transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-10">
          <Link
            href={"/events"}
            className="flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-lg transition-all duration-300 hover:bg-[#380f43] hover:text-neutral-100 text-[#380f43] hover:shadow-md"
          >
            Our Events
          </Link>
          <Link
            href={"/team"}
            className="flex items-center justify-center gap-1 rounded-full px-3 py-1.5 text-lg transition-all duration-300 hover:bg-[#380f43] hover:text-neutral-100 text-[#380f43] hover:shadow-md"
          >
            Meet the Team
          </Link>
          <JoinButton />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-[#380f43] hover:bg-[#380f43] hover:text-white transition-all duration-300"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {/* Hamburger icon with animated transition */}
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#fcf2ff]/65 backdrop-blur-sm shadow-lg overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="px-2 pt-2 pb-3 space-y-1 flex flex-col"
            >
              {[
                { href: "/events", text: "Our Events" },
                { href: "/team", text: "Meet the Team" },
                { href: "/contact", text: "Join Us" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-[#380f43] hover:bg-[#380f43] hover:text-white rounded-md transition-all duration-300 hover:shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
