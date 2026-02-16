import React from "react";

const Training = () => {
  const ctaCards = [
    {
      title: "Schedule a Free Consultation",
      description:
        "Get a free 30min consultation call, to gain valuable insights and a personalized roadmap to success",
      buttonText: "Schedule Consultation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100/50",
    },
    {
      title: "Find the Appropriate Training",
      description:
        "Take your coaching to the next level. Find a training plan that suits your needs and career goals",
      buttonText: "Find Training",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100/50",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">Take Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Your Next Level{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Starts Here
            </span>
          </h2>
        </div>

        {/* CTA Cards */}
        <section className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              {/* Background Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
                  {card.description}
                </p>

                {/* Button */}
                <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${card.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group/btn mt-2`}>
                  {card.buttonText}
                  <svg 
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </section>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Ready to transform?</p>
                <p className="text-sm text-slate-300">Join hundreds of successful clients</p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                +500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;