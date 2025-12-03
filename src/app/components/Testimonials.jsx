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
    },
    {
      name: "Jesscia Doe",
      role: "Lead Design",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person2,
    },
    {
      name: "Pugeet Khan",
      role: "Lead Technical",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person3,
    },
    {
      name: "John Doe",
      role: "Intern",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person4,
    },
    {
      name: "Cleo Sophia",
      role: "Artist",
      message:
        "Lorem ipsum dolor sit consectetur, adipisi cing. Rep elldus, repreh enderit! Amet saepe no, ducimus  Amet saepe nemo, ducimus.",
      person: person5,
    },
  ];

  return (
    <div className="bg-white w-full py-14 space-y-10">
      {/* Header */}
      <div className="space-y-4 flex flex-col items-center lg:w-[55%] mx-auto text-center px-4">
        <h1 className="font-semibold text-3xl lg:text-4xl">
          Testimonials & Feedback
        </h1>
        <p className="text-sm opacity-75 leading-6">
          These testimonials showcase the transformative power of our services,
          directly from those who experienced real value.
        </p>
      </div>
      <section>
        {/* SECTION 1 - left direction */}
        <div className="overflow-hidden w-full">
          <div className="marquee-track marquee-left">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[350px] min-w-[350px] mx-4 rounded-2xl bg-white shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    width={45}
                    height={45}
                    src={item.person}
                    className="rounded-full w-12 h-12 aspect-square"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm opacity-60">{item.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm opacity-80 leading-6">
                  {item.message}
                </p>
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
                className="w-[350px] min-w-[350px] mx-4 rounded-2xl bg-white shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    width={45}
                    height={45}
                    src={item.person}
                    className="rounded-full w-12 h-12 aspect-square"
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm opacity-60">{item.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm opacity-80 leading-6">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
