"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import NavBar from "../components/Navbar";
import route from "../../../public/route.png";
import paperClip from "../../../public/paper-clip.png";
import handShake from "../../../public/hand-shake.png";

const Page = () => {
  const [togglePrices, SetTogglePrices] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const services = [
    {
      name: "Business Strategy",
      monthly: "$299",
      yearly: "$2,999",
      icon: route,
      tagline: "Chart Your Path to Success",
      description:
        "Perfect for entrepreneurs and small businesses ready to scale with clarity and confidence.",
      includes: [
        "Personalized strategy roadmap session",
        "Market positioning & competitive analysis",
        "Quarterly goal-setting workshops",
        "Direct access to senior consultant",
      ],
      stats: "5-10 businesses",
      recommended: false,
    },
    {
      name: "Growth Accelerator",
      monthly: "$499",
      yearly: "$4,999",
      icon: paperClip,
      tagline: "Scale Faster, Smarter",
      description:
        "Comprehensive growth programs designed to multiply your revenue and expand your market reach.",
      includes: [
        "Advanced revenue optimization strategies",
        "Leadership & team performance coaching",
        "Bi-weekly 1-on-1 coaching sessions",
        "Sales funnel & conversion optimization",
      ],
      stats: "10-50 businesses",
      recommended: true,
    },
    {
      name: "Executive Mastery",
      monthly: "$799",
      yearly: "$7,999",
      icon: handShake,
      tagline: "Transform Your Enterprise",
      description:
        "White-glove consulting for established businesses seeking operational excellence and sustainable growth.",
      includes: [
        "C-suite executive coaching & mentorship",
        "Custom organizational transformation plan",
        "Weekly strategic planning sessions",
        "24/7 priority support & crisis management",
      ],
      stats: "50+ businesses",
      recommended: false,
    },
  ];

  return (
    <div className="w-screen min-h-screen flex flex-col items-start bg-linear-to-b from-white to-gray-50">
      <NavBar />

      {/* Header Section */}
      <div className="w-full mx-auto px-8 lg:px-12 pt-12 pb-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 shadow-lg shadow-blue-200 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <p className="text-white text-sm font-medium">Our Services</p>
        </div>

        <h1 className="font-bold text-5xl lg:text-6xl leading-tight bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-slide-up">
          Transform Your Business
          <br />
          <span className="text-blue-600">With Expert Guidance</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed animate-slide-up animation-delay-200">
          Whether you are launching your first venture or scaling to new heights,
          our proven coaching methodologies help you achieve breakthrough results.
          Join hundreds of successful entrepreneurs who have transformed their
          businesses with our strategic guidance.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 pt-8 animate-slide-up animation-delay-300">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">500+</p>
            <p className="text-sm text-gray-600 mt-1">Businesses Coached</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">95%</p>
            <p className="text-sm text-gray-600 mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">2.5x</p>
            <p className="text-sm text-gray-600 mt-1">Avg. Revenue Growth</p>
          </div>
        </div>
      </div>

      {/* Pricing Toggle */}
      <div className="w-full py-8 bg-white border-y border-gray-200 flex items-center justify-center">
        <div className="flex gap-6 items-center">
          <p
            className={`text-base transition-all ${
              togglePrices
                ? "text-gray-500 font-normal"
                : "text-gray-900 font-semibold"
            }`}
          >
            Monthly
          </p>

          <div
            onClick={() => SetTogglePrices(!togglePrices)}
            className={`relative w-16 h-8 px-1 rounded-full bg-linear-to-r from-blue-600 to-blue-700 flex items-center cursor-pointer transition-all shadow-lg hover:shadow-xl ${
              togglePrices ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-6 h-6 bg-white rounded-full shadow-md transition-transform"></div>
          </div>

          <div className="flex items-center gap-2">
            <p
              className={`text-base transition-all ${
                togglePrices
                  ? "text-gray-900 font-semibold"
                  : "text-gray-500 font-normal"
              }`}
            >
              Yearly
            </p>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Save 17%
            </span>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="w-full max-w-7xl mx-auto px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col gap-6 border-2 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                service.recommended
                  ? "border-blue-600 shadow-xl scale-105 lg:scale-110"
                  : "border-gray-200 shadow-lg"
              } ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Recommended Badge */}
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <Image
                  width={36}
                  height={36}
                  src={service.icon}
                  alt={service.name}
                  className="opacity-80"
                />
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.name}
                </h2>
                <p className="text-blue-600 text-sm font-medium mt-1">
                  {service.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="py-4 border-y border-gray-100">
                <div className="flex items-end gap-2">
                  <p className="text-5xl font-bold text-gray-900">
                    {togglePrices ? service.yearly : service.monthly}
                  </p>
                  <p className="text-gray-500 text-sm pb-2 font-medium">
                    /{togglePrices ? "year" : "month"}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Ideal for {service.stats}
                </p>
              </div>

              {/* Includes */}
              <div className="space-y-3 grow">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Whats Included
                </p>
                <ul className="space-y-3">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                  service.recommended
                    ? "bg-linear-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-200 hover:scale-105"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started Today
              </button>

              {/* Trust Badge */}
              <p className="text-center text-xs text-gray-500">
                🔒 No contracts • Cancel anytime
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="w-full bg-linear-to-br from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Not sure which plan is right for you?
          </h2>
          <p className="text-blue-100 text-lg">
            Schedule a free 30-minute consultation with our team to discuss your
            business goals and find the perfect fit.
          </p>
          <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
            Book Free Consultation
          </button>
        </div>
      </div>

    </div>
  );
};

export default Page;