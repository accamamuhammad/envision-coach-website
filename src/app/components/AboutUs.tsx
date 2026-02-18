'use client'

import React from "react";
import { useSearchParams } from "next/navigation";

const AboutUs = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      badge: "Our Services",
      heading: "Comprehensive Business",
      accent: "Consulting",
      subtext:
        "We deliver customized strategies that help founders scale operations, strengthen leadership, and increase profitability.",

      services: [
        {
          title: "Leadership & Team Alignment",
          description:
            "We help founders build strong leadership structures, align teams around vision, and create accountability systems that drive measurable growth.",
        },
        {
          title: "Operational Systems & Scaling",
          description:
            "From process optimization to automation frameworks, we design systems that allow your business to grow without chaos or burnout.",
        },
      ],

      bottomText: "successful businesses",
      bottomNumber: "500+",
    },

    career: {
      badge: "Career Development Programs",
      heading: "Strategic Career",
      accent: "Acceleration",
      subtext:
        "We help ambitious professionals gain clarity, position themselves strategically, and secure higher-paying opportunities.",

      services: [
        {
          title: "Career Clarity & Positioning",
          description:
            "Identify your strengths, define your direction, and create a positioning strategy that differentiates you in competitive job markets.",
        },
        {
          title: "Interview & Salary Strategy",
          description:
            "Master interviews, negotiation techniques, and personal branding frameworks that increase your earning potential.",
        },
      ],

      bottomText: "professionals empowered",
      bottomNumber: "1,200+",
    },

    tech: {
      badge: "Tech Mentorship Programs",
      heading: "Real-World Tech",
      accent: "Skill Development",
      subtext:
        "We guide aspiring developers and tech professionals through practical, hands-on systems designed to land real opportunities.",

      services: [
        {
          title: "Project-Based Learning",
          description:
            "Work on real-world projects that strengthen your portfolio and demonstrate practical competence to employers.",
        },
        {
          title: "Career Path & Remote Strategy",
          description:
            "Learn how to position yourself for remote roles, freelance opportunities, and global tech markets.",
        },
      ],

      bottomText: "tech careers launched",
      bottomNumber: "800+",
    },
  };

  const content =
    contentMap[client as keyof typeof contentMap] || contentMap.default;

  return (
    <main className="relative bg-white py-16 lg:py-24 overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 lg:mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-blue-700">
              {content.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            {content.heading}{" "}
            <span className="text-blue-600">
              {content.accent}
            </span>
          </h2>

          <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {content.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-8 border border-slate-200/60 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6"
                  />
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-200">
            <p className="text-sm font-medium text-slate-700">
              Join{" "}
              <span className="text-blue-600 font-bold">
                {content.bottomNumber}
              </span>{" "}
              {content.bottomText}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutUs;
