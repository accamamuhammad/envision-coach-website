"use client";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import AboutUs from "./components/AboutUs";
import Programs from "../app/components/Programs";
import Stats from "../app/components/Stats";
import Testimonials from "../app/components/Testimonials";
import Training from "../app/components/Training";
import Footer from "../app/components/Footer";

import { useState, useEffect } from "react";

export default function Home() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 100);
  }, []);

  return (
    <>
      <div className={`${preloader ? "hidden" : "block"} `}>
        <NavBar />
        <Hero />
        <Logo />
        <AboutUs />
        <Programs />
        <Stats />
        <Testimonials />
        <Training />
        <Footer />
      </div>
      {/* Preloader */}
      <div
        className={`${
          preloader
            ? "w-screen h-screen bg-white flex gap-2 flex-col items-center justify-center"
            : "hidden"
        }`}
      >
        <h1 className="font-bold text-2xl inline-block">
          Envision <span className="border-r-2 pr-1 animate-pulse"></span>
        </h1>
        <p className="text-sm opacity-65 b">
          Were Perfection meets Coaching and Consulting
        </p>
      </div>
    </>
  );
}

/* Structure 
1. Nav
2. Hero
3. About
4. Programs*
5. Stats
6. Testimonials
7. CTA
8. Footer
*/
