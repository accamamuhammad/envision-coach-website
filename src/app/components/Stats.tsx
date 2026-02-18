'use client'

import React from "react";
import { useSearchParams } from "next/navigation";

const Stats = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      badge: "Our Impact",
      headingMain: "Proving Excellence Through",
      headingAccent: "Training & Consulting",
      description:
        "We measure success by real-world outcomes, long-term transformation, and sustainable growth across industries.",

      stats: [
        {
          value: "160+",
          label: "Countries Reached",
          color: "from-blue-500 to-blue-600",
        },
        {
          value: "35+",
          label: "Years of Leadership Expertise",
          color: "from-emerald-500 to-emerald-600",
        },
        {
          value: "5k+",
          label: "Organizations Empowered",
          color: "from-violet-500 to-violet-600",
        },
        {
          value: "15k+",
          label: "Client Engagements Yearly",
          color: "from-orange-500 to-orange-600",
        },
      ],

      trustText: "Trusted by industry leaders worldwide",
    },

    career: {
      badge: "Career Outcomes",
      headingMain: "Real Results for",
      headingAccent: "Career Growth",
      description:
        "Our programs are built around measurable progress — better roles, higher pay, and stronger professional confidence.",

      stats: [
        {
          value: "1,200+",
          label: "Professionals Coached",
          color: "from-blue-500 to-blue-600",
        },
        {
          value: "90%",
          label: "Interview Success Rate",
          color: "from-emerald-500 to-emerald-600",
        },
        {
          value: "50+",
          label: "Countries Represented",
          color: "from-violet-500 to-violet-600",
        },
        {
          value: "2×",
          label: "Average Salary Growth",
          color: "from-orange-500 to-orange-600",
        },
      ],

      trustText: "Trusted by ambitious professionals globally",
    },

    tech: {
      badge: "Tech Impact",
      headingMain: "Building Measurable",
      headingAccent: "Tech Careers",
      description:
        "We focus on practical outcomes — portfolios built, skills validated, and real roles secured.",

      stats: [
        {
          value: "800+",
          label: "Tech Careers Launched",
          color: "from-blue-500 to-blue-600",
        },
        {
          value: "120+",
          label: "Production-Ready Projects",
          color: "from-emerald-500 to-emerald-600",
        },
        {
          value: "40+",
          label: "Countries Hiring Remotely",
          color: "from-violet-500 to-violet-600",
        },
        {
          value: "85%",
          label: "Placement Success Rate",
          color: "from-orange-500 to-orange-600",
        },
      ],

      trustText: "Trusted by aspiring and professional developers",
    },
  };

  const content =
    contentMap[client as keyof typeof contentMap] || contentMap.default;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24 overflow-hidden">

      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-200">
                {content.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {content.headingMain}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {content.headingAccent}
              </span>
            </h2>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              {content.description}
            </p>

            {/* Accent Lines */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <div className="h-1 w-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {content.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`}
                  />

                  <h3 className="relative z-10 text-4xl lg:text-5xl font-bold text-white mb-3">
                    {stat.value}
                  </h3>

                  <p className="relative z-10 text-sm lg:text-base text-slate-300 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-white">
              {content.trustText}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;
