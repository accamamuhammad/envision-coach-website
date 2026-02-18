'use client'

import React from "react";
import { useSearchParams } from "next/navigation";

const Programs = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      badge: "Our Programs",
      headingMain: "Scale Smarter. Lead Stronger.",
      headingAccent: "Grow Faster.",
      subtext:
        "Experiential and transformational leadership and business growth programs.",

      programs: [
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Leadership & Sales Management",
          description:
            "Advanced systems for founders who want structured leadership, predictable sales pipelines, and scalable operations.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Growth Strategy Workshop",
          description:
            "A free high-impact workshop designed to uncover growth bottlenecks and unlock new scaling opportunities.",
        },
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Business Systems Accelerator",
          description:
            "Build operational frameworks and automation systems that allow your business to grow without burnout.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Revenue Optimization Masterclass",
          description:
            "Learn practical revenue expansion strategies you can implement immediately.",
        },
      ],

      bottomText: "Not sure which program fits your business?",
      bottomCTA: "Schedule a Consultation",
    },

    career: {
      badge: "Career Programs",
      headingMain: "Advance Faster.",
      headingAccent: "Earn More.",
      subtext:
        "Structured programs designed to help professionals secure better roles and higher salaries.",

      programs: [
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Career Acceleration Blueprint",
          description:
            "A step-by-step roadmap to reposition yourself for higher-paying opportunities.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Interview Mastery Workshop",
          description:
            "Learn proven interview strategies that increase your confidence and success rate.",
        },
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Personal Branding Intensive",
          description:
            "Build a strong professional brand that attracts recruiters and leadership roles.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Salary Negotiation Training",
          description:
            "Master negotiation frameworks to increase your earning potential.",
        },
      ],

      bottomText: "Not sure which program fits your career goals?",
      bottomCTA: "Book Career Strategy Call",
    },

    tech: {
      badge: "Tech Programs",
      headingMain: "Build Real Skills.",
      headingAccent: "Land Real Roles.",
      subtext:
        "Hands-on, project-based programs designed to help you break into tech with confidence.",

      programs: [
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Full-Stack Career Launchpad",
          description:
            "An intensive mentorship program focused on real-world projects and portfolio development.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Intro to Remote Tech Careers",
          description:
            "A free workshop showing how to position yourself for global remote tech roles.",
        },
        {
          type: "Paid Program",
          typeColor: "text-red-600 bg-red-50 border-red-200",
          title: "Project-Based Portfolio Builder",
          description:
            "Build deployable applications that prove your technical ability to employers.",
        },
        {
          type: "Free Program",
          typeColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
          title: "Tech Interview Preparation",
          description:
            "Master coding interviews, system design basics, and technical communication.",
        },
      ],

      bottomText: "Not sure which program fits your tech journey?",
      bottomCTA: "Book Mentorship Call",
    },
  };

  const content =
    contentMap[client as keyof typeof contentMap] || contentMap.default;

  return (
    <div className="relative bg-white py-16 lg:py-24 overflow-hidden">

      {/* Grid Background */}
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {content.headingMain}{" "}
            <span className="text-blue-600">
              {content.headingAccent}
            </span>
          </h2>

          <p className="text-base lg:text-lg text-slate-600">
            {content.subtext}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {content.programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-50/80 to-white rounded-2xl p-8 border border-slate-200/60 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border mb-6 ${program.typeColor}`}>
                {program.type}
              </span>

              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {program.title}
              </h3>

              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                {program.description}
              </p>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            {content.bottomText}
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
            {content.bottomCTA}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Programs;
