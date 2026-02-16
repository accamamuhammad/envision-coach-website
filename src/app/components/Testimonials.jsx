import React from "react";
import Image from "next/image";

import person1 from "../../../public/person-1.jpg";
import person2 from "../../../public/person-2.jpg";
import person3 from "../../../public/person-3.jpg";
import person4 from "../../../public/person-4.jpg";
import person5 from "../../../public/person-5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Accama",
      role: "CTO",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person1,
      rating: 5,
    },
    {
      name: "Jessica Doe",
      role: "Lead Design",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person2,
      rating: 5,
    },
    {
      name: "Pugeet Khan",
      role: "Lead Technical",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person3,
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Intern",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person4,
      rating: 5,
    },
    {
      name: "Cleo Sophia",
      role: "Artist",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person5,
      rating: 5,
    },
  ];

  return (
    <div className="relative bg-white w-full py-16 lg:py-24 overflow-hidden">
      {/* Same Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center space-y-4 mb-12 lg:mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium text-blue-700">Client Success Stories</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Testimonials &{" "}
          <span className="text-blue-600">Feedback</span>
        </h2>
        
        <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          These testimonials showcase the transformative power of our services,
          directly from those who experienced real value.
        </p>
      </div>

      {/* Testimonials Section */}
      <section className="relative">
        {/* SECTION 1 - left direction */}
        <div className="overflow-hidden w-full">
          <div className="marquee-track marquee-left">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[380px] min-w-[380px] mx-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Message */}
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                  {item.message}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative">
                    <Image
                      width={48}
                      height={48}
                      src={item.person}
                      className="rounded-full w-12 h-12 object-cover ring-2 ring-blue-100"
                      alt={item.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 - right direction */}
        <div className="overflow-hidden w-full mt-8 hidden lg:block">
          <div className="marquee-track marquee-right">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[380px] min-w-[380px] mx-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/60 shadow-lg hover:shadow-xl p-6 transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Message */}
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-6">
                  {item.message}
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative">
                    <Image
                      width={48}
                      height={48}
                      src={item.person}
                      className="rounded-full w-12 h-12 object-cover ring-2 ring-blue-100"
                      alt={item.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-8 lg:gap-16 px-6">
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">4.9/5</p>
          <p className="text-sm text-slate-600 mt-1">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">500+</p>
          <p className="text-sm text-slate-600 mt-1">Happy Clients</p>
        </div>
        <div className="text-center">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900">98%</p>
          <p className="text-sm text-slate-600 mt-1">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;