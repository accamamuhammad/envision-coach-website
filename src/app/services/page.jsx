"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../components/Navbar";
import route from "../../../public/route.png";
import paperClip from "../../../public/paper-clip.png";
import handShake from "../../../public/hand-shake.png";

const Page = () => {
  const [togglePrices, SetTogglePrices] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: "$299",
      yearly: "$2999",
      icon: route,
      description:
        "Perfect for small businesses and startups looking to establish their digital presence.",
      includes: [
        "Basic strategy consultation",
        "Social media setup",
        "Monthly performance reports",
        "Dedicated Support Team",
      ],
    },
    {
      name: "Growth",
      monthly: "$499",
      yearly: "$4999",
      icon: paperClip,
      description:
        "Strategically designed growth plans to accelerate your business long-term success.",
      includes: [
        "Designed for growing businesses",
        "Multi-channel marketing campaigns",
        "Bi-weekly performance reports",
        "For large businesses with complex needs",
      ],
    },
    {
      name: "Enterprise",
      monthly: "$799",
      yearly: "$7999",
      icon: handShake,
      description:
        "Solutions tailored for large businesses to optimize performance and drive innovation.",
      includes: [
        "For large businesses with complex needs",
        "Full-service marketing strategy and execution",
        "Advanced analytics and custom reporting",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <div className="w-screen flex flex-col items-start space-y-10">
      <NavBar />

      {/* Header */}
      <div className="space-y-4">
        <div className="mx-8 px-3.5 py-1.5 gap-2 w-fit rounded-md flex flex-row items-center bg-blue-600">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          <p className="text-white">Pricing</p>
        </div>
        <h1 className="px-8 font-medium text-4xl">
          Maximize ROI and fast growth with our offers
        </h1>
      </div>

      {/* Toggle */}
      <div className="w-full py-5 bg-neutral-100 flex items-center justify-center">
        <div className="flex gap-5 items-center">
          <p
            className={`${"text-sm"} ${
              togglePrices ? "font-normal" : "font-medium"
            }`}
          >
            Monthly
          </p>

          <div
            onClick={() => SetTogglePrices(!togglePrices)}
            className={`w-12 h-[26px] px-1.5 rounded-full bg-black flex items-center cursor-pointer transition-all ${
              togglePrices ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          <p
            className={`${"text-sm"} ${
              togglePrices ? "font-medium" : "font-normal"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="w-full  flex flex-col lg:flex-row items-center justify-center gap-8 px-8 pb-20">
        {plans.map((plan, index) => (
          <div
            key={index}3
            className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
          >
            <Image width={50} height={50} src={plan.icon} alt="icon" />

            <h2 className="text-2xl font-semibold">{plan.name}</h2>

            <p className="text-gray-600 text-sm">{plan.description}</p>

            <p className="text-4xl font-bold">
              {togglePrices ? plan.yearly : plan.monthly}
            </p>

            <ul className="text-sm text-gray-700 space-y-2">
              {plan.includes.map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>

            <button className="mt-4 w-full py-2 rounded-xl bg-black text-white font-medium hover:opacity-80 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
