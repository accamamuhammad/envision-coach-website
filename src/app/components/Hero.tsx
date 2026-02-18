'use client'

import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

// Small Logo
import HandShake from "../../../public/hand-shake.png";
import Route from "../../../public/route.png";
import Globe from "../../../public/globe.svg";

// Large Images
import Team1 from "../../../public/team-photo-1.jpg";
import Team2 from "../../../public/team-photo-2.jpg";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(Team1);
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const copyMap = {
    default: {
      badge: "Employee Training & Consulting",
      headingMain: "Build a Business",
      headingAccent: "That Runs Itself",
      description:
        "Strategic coaching for ambitious founders ready to increase revenue, improve systems, and scale with confidence.",
      cta: "Begin Your Transformation",
      statNumber: "500+",
      statText: "Businesses Transformed",
      features: [
        { name: "Trusted", logo: HandShake },
        { name: "Tailored", logo: Route },
        { name: "Worldwide", logo: Globe },
      ],
    },

    career: {
      badge: "Career Growth & Leadership Coaching",
      headingMain: "Land The Role",
      headingAccent: "You Deserve",
      description:
        "Helping professionals gain clarity, confidence, and high-paying opportunities through proven career strategies.",
      cta: "Start Your Career Upgrade",
      statNumber: "1,200+",
      statText: "Professionals Guided",
      features: [
        { name: "Interview Mastery", logo: HandShake },
        { name: "Personal Branding", logo: Route },
        { name: "Global Reach", logo: Globe },
      ],
    },

    tech: {
      badge: "Tech Mentorship & Skill Acceleration",
      headingMain: "Break Into Tech",
      headingAccent: "With Confidence",
      description:
        "Hands-on mentorship for aspiring developers and tech professionals ready to land real opportunities.",
      cta: "Start Learning Today",
      statNumber: "800+",
      statText: "Tech Careers Launched",
      features: [
        { name: "Real Projects", logo: HandShake },
        { name: "Portfolio Ready", logo: Route },
        { name: "Remote Opportunities", logo: Globe },
      ],
    },
  };

  const content =
    (client && copyMap[client as keyof typeof copyMap]) || copyMap.default;

  return (
    <main className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      
      {/* Decorative Blur Background */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* TEXT SECTION */}
      <section className="relative lg:w-1/2 px-6 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col justify-center z-10">
        <div className="max-w-2xl space-y-6 lg:space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-sm font-medium text-slate-700">
              {content.badge}
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {content.headingMain} <br />
            <span className="text-blue-600 relative inline-block">
              {content.headingAccent}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C50 2.5 150 2.5 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-blue-300"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
            <button className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <span className="relative z-10 text-sm lg:text-base">
                {content.cta}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md text-sm lg:text-base">
              Contact Us
            </button>
          </div>

          {/* Feature Pills */}
          <div className="hidden xl:flex items-center gap-8 pt-6">
            {content.features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                  <Image
                    width={20}
                    height={20}
                    alt={item.name}
                    src={item.logo}
                  />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="relative lg:w-1/2 px-6 sm:px-12 lg:pl-8 lg:pr-16 pb-8 sm:pb-12 lg:py-16 flex items-center justify-center z-10">
        <div className="relative w-full max-w-md lg:max-w-lg">

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5">
            <Image
              src={imgSrc}
              alt="Professional team collaboration"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              onError={() => setImgSrc(Team2)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating Card */}
          <div className="hidden md:block absolute -bottom-6 -left-6 w-72 items-center p-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">
                  {content.statNumber}
                </p>
                <p className="text-sm text-slate-600">
                  {content.statText}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Hero;
