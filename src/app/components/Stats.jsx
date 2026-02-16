import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "160+",
      label: "Countries Envisioned",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
    },
    {
      value: "35+",
      label: "Years as a top leadership company",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600",
    },
    {
      value: "5k+",
      label: "Leader Schools in more than 50 Countries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-violet-500 to-violet-600",
    },
    {
      value: "15k+",
      label: "Client engagements per year",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-200">Our Impact</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Proving Excellence Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Training & Consulting
              </span>
            </h2>

            <p className="text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              cupiditate. Doloribus, volupt perferendis sunt optio, hic voluptatem
              fugiat aspernatur.
            </p>

            {/* Decorative Line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <div className="h-1 w-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
                    <div className="text-white opacity-60">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value */}
                  <div className="relative z-10 mb-3">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white group-hover:scale-105 transition-transform">
                      {stat.value}
                    </h3>
                  </div>

                  {/* Label */}
                  <p className="text-sm lg:text-base text-slate-300 leading-snug">
                    {stat.label}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity blur-xl`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-white">
              Trusted by industry leaders worldwide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;