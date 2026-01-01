import React from "react";
import Image from "next/image";

// Small Logo
import HandShake from "../../../public/hand-shake.png";
import Route from "../../../public/route.png";
import Globe from "../../../public/globe.svg";

// Large Images
import Team1 from "../../../public/Images/team-photo-1.jpg";
import Team2 from "../../../public/Images/team-photo-2.jpg";

const Hero = () => {
  let sp = [
    { name: "Truted", logo: HandShake },
    { name: "Tailored", logo: Route },
    { name: "Worldwide", logo: Globe },
  ];

  return (
    <main className="lg:py-3 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Text Section */}
      <section className="lg:w-1/2 px-8 py-5 space-y-4.5 bg-white z-40">
        <div className="pop-out-once-element px-3 py-1.5 inline-block rounded-xl border border-neutral-300 text-sm">
          <p className="opacity-65">Employee training and consultant</p>
        </div>
        <h1 className="text-4xl leading-12 font-medium text-pop-out">
          Empowring Excellence through Training and Consulting
        </h1>
        <p className="opacity-65 leading-6 text-sm text-pop-out">
          Our expert training and consulting solutions pave the way for your
          organization&apos;s success by driving continuous improvement,
          innovation and exceptional performance.
        </p>
        <div className="space-x-2.5">
          <button className="px-4 h-11 bg-blue-600 text-white rounded-lg text-sm border hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer">
            Begin your Transformation
          </button>
          <button className="px-4 h-11 bg-white text-black border border-neutral-300 rounded-lg text-sm hover:border-blue-600 hover:text-blue-600 cursor-pointer">
            Contact Us
          </button>
        </div>
        <div className="pull-out-right-element hidden xl:flex w-full mt-8 p-5 rounded-lg border border-neutral-300 flex-row items-center justify-between">
          {sp.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row gap-2 items-center justify-center"
              >
                <Image width={20} height={20} alt="logo" src={item.logo} />
                <p className="text-sm opacity-65">{item.name}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* image Section */}
      <section className="lg:w-1/2 pb-3 px-8 lg:pr-4 gap-3 flex flex-col items-center md:flex-row lg:flex-col overflow-hidden lg:items-end">
        <Image
          src={Team1}
          alt="team-photo"
          className="pull-out-right-element w-full h-fit md:w-1/2 lg:w-full md:h-72 lg:h-fit lg:max-w-[550px] rounded-lg"
        />
        <Image
          src={Team2}
          alt="team-photo"
          className="w-full h-fit md:w-1/2 lg:w-full md:h-72 hidden md:block lg:hidden rounded-lg"
        />
      </section>
    </main>
  );
};

export default Hero;
