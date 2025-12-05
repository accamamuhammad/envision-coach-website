import React from "react";
import Image from "next/image";
import Link from "next/link";

// Logo's
import InstagramLogo from "../../../public/instagram.svg";
import facebookLogo from "../../../public/facebook.svg";
import YoutubeLogo from "../../../public/youtube.svg";
import TwitterLogo from "../../../public/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white px-8 py-10 flex flex-col items-center justify-center">
      <div className="space-y-10 flex flex-col md:flex-row justify-between items-start">
        {/* Header */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl lg:text-2xl leading-9 font-medium">
            Empowring Excellencr in Workforce Development and Strategic
            Consulting, Your Partner for Success
          </h1>
          <div className="w-full flex flex-row gap-5 md:mt-6">
            <Image
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo"
              src={InstagramLogo}
            />
            <Image
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo"
              src={facebookLogo}
            />
            <Image
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo"
              src={YoutubeLogo}
            />
            <Image
              width={20}
              height={20}
              className="w-5 h-5"
              alt="logo"
              src={TwitterLogo}
            />
          </div>
        </div>
        {/* Link */}
        <div className="w-full md:w-1/2 gap-10 flex lg:flex-row items-center justify-between md:justify-end">
          <ul className="space-y-1">
            <li className="text-neutral-500 mb-2.5 text-sm lg:text-base">
              Company Info
            </li>
            <li className="cursor-pointer text-sm lg:text-base">Login</li>
            <li className="cursor-pointer text-sm lg:text-base">About Us</li>
            <li className="cursor-pointer text-sm lg:text-base">Terms</li>
            <li className="cursor-pointer text-sm lg:text-base">Privact</li>
            <li className="cursor-pointer text-sm lg:text-base">Partners</li>
          </ul>
          <ul className="space-y-1">
            <li className="text-neutral-500 mb-2.5 text-sm lg:text-base">
              Learn More
            </li>
            <li className="cursor-pointer text-sm lg:text-base">
              Invetor Relations
            </li>
            <li className="cursor-pointer text-sm lg:text-base">
              Goverment Services
            </li>
            <li className="cursor-pointer text-sm lg:text-base">Sitemap</li>
            <li className="cursor-pointer text-sm lg:text-base">Careers</li>
            <li className="cursor-pointer text-sm lg:text-base">Contact Us</li>
          </ul>
        </div>
      </div>
      {/* line */}
      <div className="w-full bg-neutral-400 h-[0.5px] mt-8 mb-6"></div>
      <div className="w-full flex flex-row justify-between opacity-65 text-sm">
        <p className="lg:text-base">Copyright © 2025</p>
        <p className="lg:text-base hover:text-blue-400">
          <Link href="https://accama-20-acccama-muhammads-projects.vercel.app/">
            Built by Accama
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
