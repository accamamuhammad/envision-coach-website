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
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`${preloader ? "hidden" : "block"}`}>
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
            ? "fixed inset-0 w-screen h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500"
            : "hidden"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Content */}
        <div className="relative z-10 text-center space-y-6">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-white tracking-wider">EXCELLENCE CONSULTING</span>
          </div>

          {/* Main Text with Typing Effect */}
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
            Envision{" "}
            <span className="inline-block w-1 h-12 sm:h-14 lg:h-16 bg-blue-500 animate-pulse ml-1 align-middle"></span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-slate-300 max-w-md mx-auto px-4">
            Where Perfection Meets Coaching and Consulting
          </p>

          {/* Loading Animation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce-dot-1"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce-dot-2"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce-dot-3"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto mt-8">
            <div className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full animate-progress"></div>
          </div>
        </div>

        {/* Bottom Stats/Features */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-8 text-center">
          <div className="text-white/60 text-xs">
            <p className="font-semibold text-white mb-1">500+</p>
            <p>Happy Clients</p>
          </div>
          <div className="text-white/60 text-xs">
            <p className="font-semibold text-white mb-1">35+</p>
            <p>Years Experience</p>
          </div>
          <div className="text-white/60 text-xs">
            <p className="font-semibold text-white mb-1">160+</p>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </>
  );
}