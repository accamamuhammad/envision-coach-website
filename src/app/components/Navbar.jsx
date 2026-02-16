// Convert to client side component
"use client";

// Import all Assets
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import assets
import Logo from "../../../public/Hero-Logo-1.png";
import Hamburger from "../../../public/menu-icon.png";
import Close from "../../../public/icon-close.svg";

const Nav = () => {
  const [toggle, SetToggle] = useState(false);

  const handleToggleNav = () => {
    SetToggle(!toggle);
  };

  const links = [
    { title: "Services", link: "/services" },
    { title: "About Us", link: "/about" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "Team", link: "/team" },
  ];

  return (
    <nav className="bg-white  text-black scroll-smooth sticky top-0 z-50 py-5 px-10 pr-7 w-screen h-fit flex flex-row items-center justify-between">
      {/* Logo Section */}
      <div className="flex gap-1 flex-row items-center bounce-element">
        <Image
          width={30}
          height={30}
          src={Logo}
          alt="Logo"
          className="relative"
        />
        <h2 className="text-xl font-medium opacity-65">Envision</h2>
      </div>
      {/* Links Section */}
      <ul
        className={
          toggle
            ? "w-full text-center pb-6 py-2 gap-7 absolute top-16 left-1/2 -translate-x-1/2 bg-white flex flex-col items-center justify-center"
            : "hidden lg:flex text-lg flex-row items-center justify-center gap-14 z-50"
        }
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="opacity-80 hover:opacity-100 cursor-pointer text-black text-[0.95rem]"
          >
            <Link
              href={link.link}
              className="text-pop-out cursor-pointer hover:text-blue-500 "
            >
              {link.title}
            </Link>
          </li>
        ))}
        <div className="lg:hidden">
          <button className="px-4 h-11 bg-blue-600 text-white  bounce-element rounded-lg text-sm border hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer">
            Contact Us
          </button>
        </div>
      </ul>
      {/* Menu Toggle Section */}
      <Image
        width={25}
        height={25}
        src={toggle ? Close : Hamburger}
        alt="Toggle"
        onClick={handleToggleNav}
        className="cursor-pointer lg:hidden"
      ></Image>
      <a
  href="https://tidycal.com/protusweb/15-minute-meeting"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 h-11 bg-blue-600 text-white rounded-lg text-sm border hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer hidden lg:inline-flex items-center justify-center"
>
  Free Consultation
</a>

    </nav>
  );
};

export default Nav;
