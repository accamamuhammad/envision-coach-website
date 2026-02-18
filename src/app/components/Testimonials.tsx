'use client'

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import person1 from "../../../public/person-1.jpg";
import person2 from "../../../public/person-2.jpg";
import person3 from "../../../public/person-3.jpg";
import person4 from "../../../public/person-4.jpg";
import person5 from "../../../public/person-5.jpg";

const Testimonials = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      badge: "Client Success Stories",
      headingMain: "Testimonials &",
      headingAccent: "Feedback",
      description:
        "These testimonials showcase the transformative power of our services directly from leaders and professionals worldwide.",
      stats: {
        rating: "4.9/5",
        clients: "500+",
        satisfaction: "98%",
      },
      testimonials: [
        {
          name: "Accama",
          role: "CTO",
          message:
            "Working with this team completely transformed our leadership culture. The clarity and structure they provided changed everything.",
          person: person1,
          rating: 5,
        },
        {
          name: "Jessica Doe",
          role: "Head of Strategy",
          message:
            "The consulting approach was practical, actionable, and immediately impactful.",
          person: person2,
          rating: 5,
        },
        {
          name: "Pugeet Khan",
          role: "Operations Director",
          message:
            "We saw measurable improvements in team alignment and productivity within weeks.",
          person: person3,
          rating: 5,
        },
        {
          name: "John Doe",
          role: "Program Manager",
          message:
            "Highly structured sessions with real-world implementation frameworks.",
          person: person4,
          rating: 5,
        },
        {
          name: "Cleo Sophia",
          role: "Executive Leader",
          message:
            "A long-term partner for sustainable growth and leadership development.",
          person: person5,
          rating: 5,
        },
      ],
    },

    career: {
      badge: "Career Transformations",
      headingMain: "Success Stories from",
      headingAccent: "Professionals",
      description:
        "Real career breakthroughs, promotions, and salary growth from clients who took action.",
      stats: {
        rating: "4.8/5",
        clients: "1,200+",
        satisfaction: "95%",
      },
      testimonials: [
        {
          name: "Daniel A.",
          role: "Software Engineer",
          message:
            "I doubled my salary within 8 months after following the structured roadmap.",
          person: person1,
          rating: 5,
        },
        {
          name: "Sarah M.",
          role: "Product Manager",
          message:
            "The interview preparation strategy alone was worth everything.",
          person: person2,
          rating: 5,
        },
        {
          name: "Ahmed R.",
          role: "Data Analyst",
          message:
            "Clear career positioning helped me stand out in a competitive market.",
          person: person3,
          rating: 5,
        },
        {
          name: "Lina T.",
          role: "UX Designer",
          message:
            "Confidence, clarity, and a concrete action plan. Exactly what I needed.",
          person: person4,
          rating: 5,
        },
        {
          name: "Michael K.",
          role: "Cloud Engineer",
          message:
            "Structured growth instead of random learning. Massive difference.",
          person: person5,
          rating: 5,
        },
      ],
    },

    tech: {
      badge: "Tech Career Wins",
      headingMain: "Real Results in",
      headingAccent: "Tech",
      description:
        "From zero experience to job-ready portfolios and real tech roles.",
      stats: {
        rating: "4.9/5",
        clients: "800+",
        satisfaction: "97%",
      },
      testimonials: [
        {
          name: "Ibrahim S.",
          role: "Frontend Developer",
          message:
            "Built 5 real-world projects and landed my first remote role.",
          person: person1,
          rating: 5,
        },
        {
          name: "Fatima N.",
          role: "Backend Engineer",
          message:
            "The structured mentorship helped me avoid years of confusion.",
          person: person2,
          rating: 5,
        },
        {
          name: "David L.",
          role: "DevOps Engineer",
          message:
            "Clear roadmap, real projects, real results.",
          person: person3,
          rating: 5,
        },
        {
          name: "Grace O.",
          role: "Full Stack Developer",
          message:
            "Portfolio-first approach made all the difference.",
          person: person4,
          rating: 5,
        },
        {
          name: "Victor P.",
          role: "AI Engineer",
          message:
            "From beginner to production-ready systems in under a year.",
          person: person5,
          rating: 5,
        },
      ],
    },
  };

  const content =
    contentMap[client as keyof typeof contentMap] || contentMap.default;

  const testimonials = content.testimonials;

  return (
    <div className="relative bg-white w-full py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center space-y-4 mb-12 lg:mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-sm font-medium text-blue-700">
            {content.badge}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {content.headingMain}{" "}
          <span className="text-blue-600">{content.headingAccent}</span>
        </h2>

        <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>

      {/* Testimonials (single marquee block kept for simplicity) */}
      <div className="overflow-hidden w-full">
        <div className="marquee-track marquee-left">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[380px] min-w-[380px] mx-4 rounded-2xl bg-white border border-slate-200 shadow-lg p-6"
            >
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                {item.message}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <Image
                  width={48}
                  height={48}
                  src={item.person}
                  className="rounded-full w-12 h-12 object-cover"
                  alt={item.name}
                />
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 px-6">
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">
            {content.stats.rating}
          </p>
          <p className="text-sm text-slate-600 mt-1">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">
            {content.stats.clients}
          </p>
          <p className="text-sm text-slate-600 mt-1">Happy Clients</p>
        </div>
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">
            {content.stats.satisfaction}
          </p>
          <p className="text-sm text-slate-600 mt-1">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
