import React from "react";
import Image from "next/image";

// Small Logo
import HandShake from "../../../public/hand-shake.png";
import Route from "../../../public/route.png";
import Globe from "../../../public/globe.svg";

// Large Images
import Team1 from "../../../public/team-photo-1.jpg";
import Team2 from "../../../public/team-photo-2.jpg";

const Hero = () => {
  let sp = [
    { name: "Trusted", logo: HandShake },
    { name: "Tailored", logo: Route },
    { name: "Worldwide", logo: Globe },
  ];

  return (
    <main className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Text Section */}
      <section className="relative lg:w-1/2 px-6 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 flex flex-col justify-center z-10">
        <div className="max-w-2xl space-y-6 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-sm font-medium text-slate-700">
              Employee training and consultant
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Build a Business <br />
            That{" "}
            <span className="text-blue-600 relative inline-block">
              Runs Itself
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
            Strategic coaching for ambitious founders ready to increase revenue,
            improve systems, and scale with confidence through continuous
            improvement and exceptional performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
            <button className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
              <span className="relative z-10 text-sm lg:text-base">
                Begin Your Transformation
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-6 lg:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-sm text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md text-sm lg:text-base">
              Contact Us
            </button>
          </div>

          {/* Feature Pills */}
          <div className="hidden xl:flex items-center gap-8 pt-6">
            {sp.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="relative w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                  <Image
                    width={20}
                    height={20}
                    alt={item.name}
                    src={item.logo}
                    className="group-hover:scale-110 transition-transform"
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

      {/* Image Section */}
      <section className="relative lg:w-1/2 px-6 sm:px-12 lg:pl-8 lg:pr-16 pb-8 sm:pb-12 lg:py-16 flex items-center justify-center z-10">
        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* Main Image */}
          <div className="relative aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/5">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={Team1}
                alt="Professional team collaboration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          {/* Floating Card */}
          <div className="hidden md:block absolute -bottom-6 -left-6 lg:-left-8 w-64 p-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl shadow-slate-900/10 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
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
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-600">Businesses Transformed</p>
              </div>
            </div>
          </div>

          {/* Decorative Dot Pattern */}
          <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30">
            <div className="grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;