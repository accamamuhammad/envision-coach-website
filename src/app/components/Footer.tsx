'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Logos
import InstagramLogo from "../../../public/instagram.svg";
import FacebookLogo from "../../../public/facebook.svg";
import YoutubeLogo from "../../../public/youtube.svg";
import TwitterLogo from "../../../public/twitter.svg";

const Footer = () => {
  const searchParams = useSearchParams();
  const client = searchParams.get("client");

  const contentMap = {
    default: {
      brandName: "Excellence Consulting",
      slogan: "Your Partner for Success",
      description:
        "Empowering Excellence in Workforce Development and Strategic Consulting",
      socialLinks: [
        { name: "Instagram", icon: InstagramLogo, href: "#" },
        { name: "Facebook", icon: FacebookLogo, href: "#" },
        { name: "YouTube", icon: YoutubeLogo, href: "#" },
        { name: "Twitter", icon: TwitterLogo, href: "#" },
      ],
      companyLinks: [
        { name: "Login", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Partners", href: "#" },
      ],
      learnMoreLinks: [
        { name: "Investor Relations", href: "#" },
        { name: "Government Services", href: "#" },
        { name: "Sitemap", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
      newsletterTitle: "Stay Updated",
      newsletterSubtitle: "Subscribe to our newsletter for insights and updates",
      copyright: "© 2025 Excellence Consulting.",
    },
    career: {
      brandName: "Career Boosters",
      slogan: "Fuel Your Professional Growth",
      description: "Guiding professionals to achieve career success",
      socialLinks: [
        { name: "LinkedIn", icon: InstagramLogo, href: "#" }, // Replace with real icon
        { name: "Twitter", icon: TwitterLogo, href: "#" },
      ],
      companyLinks: [
        { name: "Login", href: "#" },
        { name: "Career Programs", href: "#" },
        { name: "About Us", href: "#" },
      ],
      learnMoreLinks: [
        { name: "Blog", href: "#" },
        { name: "Resources", href: "#" },
        { name: "Contact", href: "#" },
      ],
      newsletterTitle: "Get Career Insights",
      newsletterSubtitle: "Join thousands of professionals in our updates",
      copyright: "© 2025 Career Boosters.",
    },
    tech: {
      brandName: "Tech Academy",
      slogan: "Learn, Build, Succeed",
      description: "Empowering aspiring developers and tech professionals",
      socialLinks: [
        { name: "GitHub", icon: InstagramLogo, href: "#" },
        { name: "Twitter", icon: TwitterLogo, href: "#" },
        { name: "YouTube", icon: YoutubeLogo, href: "#" },
      ],
      companyLinks: [
        { name: "Login", href: "#" },
        { name: "Courses", href: "#" },
        { name: "About Tech Academy", href: "#" },
      ],
      learnMoreLinks: [
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" },
        { name: "Careers", href: "#" },
      ],
      newsletterTitle: "Subscribe for Tech Updates",
      newsletterSubtitle: "Get insights, tutorials, and news straight to your inbox",
      copyright: "© 2025 Tech Academy.",
    },
  };

  const content = contentMap[client as keyof typeof contentMap] || contentMap.default;

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-white">
                {content.brandName}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-snug max-w-lg">
              {content.description}
            </h2>
            <p className="text-slate-400 text-sm lg:text-base">{content.slogan}</p>

            <div className="flex items-center gap-4 pt-2">
              {content.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="group w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <Image
                    width={18}
                    height={18}
                    src={social.icon}
                    alt={social.name}
                    className="w-[18px] h-[18px] opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:justify-end">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Company Info
              </h3>
              <ul className="space-y-3">
                {content.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm lg:text-base transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-blue-500 group-hover:w-4 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                Learn More
              </h3>
              <ul className="space-y-3">
                {content.learnMoreLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm lg:text-base transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-blue-500 group-hover:w-4 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{content.newsletterTitle}</h3>
              <p className="text-slate-400 text-sm">{content.newsletterSubtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all min-w-[280px]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p className="flex items-center gap-2">
            <span>{content.copyright}</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://accama-20-acccama-muhammads-projects.vercel.app/"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Built by Accama</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
