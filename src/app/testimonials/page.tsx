import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Navbar";

// Import your images
import person1 from "../../../public/person-1.jpg";
import person2 from "../../../public/person-2.jpg";
import person3 from "../../../public/person-3.jpg";
import person4 from "../../../public/person-4.jpg";
import person5 from "../../../public/person-5.jpg";

// You'll need to create/import your navbar component
// import Navbar from "../components/Navbar";

const TestimonialsPage = () => {
  const featuredTestimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      company: "TechVision Inc.",
      message:
        "Working with this consulting firm has been transformative for our organization. Their strategic insights and hands-on approach helped us increase revenue by 150% in just 18 months. The leadership training programs have empowered our entire management team to operate at a higher level.",
      person: person1,
      rating: 5,
      industry: "Technology",
      impact: "+150% Revenue Growth",
    },
    {
      name: "Michael Chen",
      role: "Founder & Managing Director",
      company: "Global Dynamics",
      message:
        "The level of expertise and personalized attention we received was exceptional. They didn't just consult—they became true partners in our growth journey. Their innovative strategies helped us navigate a difficult market transition and emerge stronger than ever.",
      person: person2,
      rating: 5,
      industry: "Finance",
      impact: "Market Leader in 12 Months",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "InnovateCorp",
      message:
        "The training programs revolutionized how our teams collaborate and execute. We've seen a dramatic improvement in efficiency, morale, and results. This investment has paid for itself many times over through improved performance and reduced turnover.",
      person: person3,
      rating: 5,
      industry: "Manufacturing",
      impact: "40% Efficiency Increase",
    },
  ];

  const allTestimonials = [
    {
      name: "David Thompson",
      role: "Director of HR",
      company: "Enterprise Solutions",
      message:
        "The workforce development programs transformed our company culture. Employee engagement scores increased by 60%, and we're now recognized as a top employer in our industry.",
      person: person4,
      rating: 5,
      industry: "Enterprise Software",
    },
    {
      name: "Jennifer Martinez",
      role: "COO",
      company: "Retail Innovations",
      message:
        "Their strategic consulting helped us pivot our business model during challenging times. The results exceeded our expectations—we're now growing faster than before the crisis.",
      person: person5,
      rating: 5,
      industry: "Retail",
    },
    {
      name: "Robert Kim",
      role: "President",
      company: "Healthcare Partners",
      message:
        "The leadership development program was a game-changer for our executive team. We now have clarity, alignment, and the tools to scale our organization effectively.",
      person: person1,
      rating: 5,
      industry: "Healthcare",
    },
    {
      name: "Amanda Foster",
      role: "Chief Strategy Officer",
      company: "MediaTech Group",
      message:
        "Outstanding results from day one. Their consultants understood our unique challenges and delivered customized solutions that drove immediate impact. Highly recommended!",
      person: person2,
      rating: 5,
      industry: "Media & Entertainment",
    },
    {
      name: "James Wilson",
      role: "Managing Partner",
      company: "Legal Advisors LLP",
      message:
        "The training was practical, engaging, and directly applicable to our business. Our team immediately implemented the strategies and we saw measurable improvements within weeks.",
      person: person3,
      rating: 5,
      industry: "Legal Services",
    },
    {
      name: "Lisa Anderson",
      role: "Executive Director",
      company: "Nonprofit Leaders",
      message:
        "They helped us achieve what seemed impossible—doubling our impact while improving operational efficiency. Their expertise in organizational development is unmatched.",
      person: person4,
      rating: 5,
      industry: "Nonprofit",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "160+", label: "Countries Served" },
  ];

  const categories = [
    "All Industries",
    "Technology",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Retail",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Add your Navbar component here */}
      {/* <Navbar /> */}
      <Nav/>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-sm mb-6">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-sm font-medium text-slate-700">Client Success Stories</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Real Results from{" "}
            <span className="text-blue-600 relative inline-block">
              Real Clients
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-blue-300"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Discover how we have helped organizations across industries achieve transformative growth, operational excellence, and lasting success.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-blue-700">Featured Stories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Transformative{" "}
              <span className="text-blue-600">Success Stories</span>
            </h2>
          </div>

          <div className="space-y-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-8 lg:p-12 border border-slate-200/60 hover:border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Image and Profile */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={testimonial.person}
                        alt={testimonial.name}
                        width={120}
                        height={120}
                        className="rounded-2xl object-cover ring-4 ring-blue-100 w-24 h-24 lg:w-32 lg:h-32"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center border-4 border-white shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Quote Icon */}
                    <svg className="w-10 h-10 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Message */}
                    <p className="text-base lg:text-lg text-slate-700 leading-relaxed italic">
                      &quot;{testimonial.message}&quot;
                    </p>

                    {/* Profile Info and Tags */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                        <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 ml-auto">
                        <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
                          {testimonial.industry}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
                          {testimonial.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">Filter by Industry</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === 0
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-6 border border-slate-200/60 hover:border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.message}&rdquo;
                </p>

                {/* Industry Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-4">
                  {testimonial.industry}
                </span>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative">
                    <Image
                      width={48}
                      height={48}
                      src={testimonial.person}
                      className="rounded-full w-12 h-12 object-cover ring-2 ring-blue-100"
                      alt={testimonial.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">Video Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Hear Directly from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Clients
            </span>
          </h2>

          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Watch real leaders share their transformation stories
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <Image
                  src={index === 0 ? person1 : index === 1 ? person2 : person3}
                  alt="Video thumbnail"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Write Your{" "}
            <span className="text-blue-600">Success Story?</span>
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful organizations that have transformed their businesses with our strategic consulting and training programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200">
              <span className="relative z-10">Schedule Free Consultation</span>
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200">
              View Our Programs
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <div className="flex -space-x-2">
              {[person1, person2, person3, person4, person5].map((person, i) => (
                <Image
                  key={i}
                  src={person}
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white w-10 h-10 object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Join <span className="font-bold text-blue-600">500+</span> satisfied clients worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;