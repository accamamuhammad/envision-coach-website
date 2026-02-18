'use client'

import React from "react";
import { useSearchParams } from "next/navigation";

const Training = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      badge: "Take Action",
      headingMain: "Your Next Level",
      headingAccent: "Starts Here",

      cards: [
        {
          title: "Schedule a Free Consultation",
          description:
            "Book a free 30-minute strategy call to gain clarity, insights, and a personalized growth roadmap.",
          buttonText: "Schedule Consultation",
          gradient: "from-blue-500 to-blue-600",
          bgGradient: "from-blue-50 to-blue-100/50",
        },
        {
          title: "Find the Right Training Program",
          description:
            "Explore proven training systems designed to help you scale leadership, operations, and results.",
          buttonText: "Find Training",
          gradient: "from-purple-500 to-purple-600",
          bgGradient: "from-purple-50 to-purple-100/50",
        },
      ],

      bannerTitle: "Ready to transform?",
      bannerSubtitle: "Join hundreds of successful clients",
    },

    career: {
      badge: "Start Your Career Growth",
      headingMain: "Your Career Breakthrough",
      headingAccent: "Starts Here",

      cards: [
        {
          title: "Book a Career Strategy Call",
          description:
            "Get a 30-minute 1-on-1 call to map out your career path, salary strategy, and next moves.",
          buttonText: "Book Strategy Call",
          gradient: "from-blue-500 to-blue-600",
          bgGradient: "from-blue-50 to-blue-100/50",
        },
        {
          title: "Choose Your Career Program",
          description:
            "Select a structured program designed to help you land better roles and earn more.",
          buttonText: "View Programs",
          gradient: "from-purple-500 to-purple-600",
          bgGradient: "from-purple-50 to-purple-100/50",
        },
      ],

      bannerTitle: "Ready to level up your career?",
      bannerSubtitle: "Join 1,200+ professionals who took action",
    },

    tech: {
      badge: "Start Your Tech Journey",
      headingMain: "Build Real Skills.",
      headingAccent: "Get Real Roles.",

      cards: [
        {
          title: "Book a Mentorship Call",
          description:
            "Discuss your current skill level and get a roadmap to land real tech roles.",
          buttonText: "Book Mentorship Call",
          gradient: "from-blue-500 to-blue-600",
          bgGradient: "from-blue-50 to-blue-100/50",
        },
        {
          title: "Explore Tech Training",
          description:
            "Choose a project-based training program designed for real-world outcomes.",
          buttonText: "Explore Training",
          gradient: "from-purple-500 to-purple-600",
          bgGradient: "from-purple-50 to-purple-100/50",
        },
      ],

      bannerTitle: "Ready to break into tech?",
      bannerSubtitle: "Join 800+ developers building real careers",
    },
  };

  const content =
    contentMap[client as keyof typeof contentMap] || contentMap.default;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24 overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
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
        </div>

        {/* CTA Cards */}
        <section className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center mb-6 shadow-lg`}>
                →
              </div>

              <h3 className="relative z-10 text-xl lg:text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>

              <p className="relative z-10 text-sm lg:text-base text-slate-300 mb-6">
                {card.description}
              </p>

              <button className={`relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${card.gradient} text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all`}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </section>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10">
            <p className="text-white font-semibold">
              {content.bannerTitle}
            </p>
            <p className="text-sm text-slate-300">
              {content.bannerSubtitle}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Training;
