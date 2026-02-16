"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Import assets
import Logo from "../../../public/Hero-Logo-1.png";
import Hamburger from "../../../public/menu-icon.png";
import Close from "../../../public/icon-close.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleNav = () => {
    setToggle(!toggle);
  };

  const links = [
    { title: "Services", link: "/services" },
    { title: "About Us", link: "/aboutUs" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "Team", link: "/team" },
  ];

  return (
    <nav
      className={`bg-white text-black scroll-smooth sticky top-0 z-50 w-screen transition-all duration-300 ${
        scrolled
          ? "shadow-lg py-3 px-6 lg:px-10"
          : "py-5 px-8 lg:px-12 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex gap-2 flex-row items-center group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              width={20}
              height={20}
              src={Logo}
              alt="Envision Logo"
              className="brightness-0 invert"
            />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Envision
          </h2>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex flex-row items-center gap-10">
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <Link
                href={link.link}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="https://tidycal.com/protusweb/15-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          <span className="mr-2">📅</span>
          Free Consultation
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleToggleNav}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Image
            width={24}
            height={24}
            src={toggle ? Close : Hamburger}
            alt="Menu toggle"
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ${
            toggle
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col py-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.link}
                  onClick={() => setToggle(false)}
                  className="block px-8 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="px-8 pt-4 pb-2">
              <a
                href="https://tidycal.com/protusweb/15-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span className="mr-2">📅</span>
                Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;