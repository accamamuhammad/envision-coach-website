import React from "react";
import Image from "next/image";

import person1 from "../../../public/person-1.jpg";
import person2 from "../../../public/person-2.jpg";
import person3 from "../../../public/person-3.jpg";
import person4 from "../../../public/person-4.jpg";
import person5 from "../../../public/person-5.jpg";

const Testimonials = () => {
  const NumberOfRows = [1, 2];

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
    <div className="bg-neutral-100 w-full py-14 space-y-10">
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
        {/* Scrollable Section */}
        {/* Section 1 */}
        <div className="w-full overflow-x-auto px-3 no-scrollbar">
          <div
            className="
            flex gap-4
            snap-x snap-mandatory
            w-max
            pb-4
            scroll-smooth
            "
          >
            {testimonials.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[350px] min-w-[350px]  /* prevents shrinking inside scroll area */ rounded-2xl bg-white shadow-md p-4 flex flex-col gap-3 hover:shadow-xl transition-all duration-300 snap-center"
                >
                  {/* Top Section */}
                  <div className="flex items-center gap-3">
                    <Image
                      width={45}
                      alt="person"
                      src={item.person}
                      className="rounded-full aspect-square"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-sm opacity-60">{item.role}</p>
                    </div>
                  </div>
                  {/* Message */}
                  <p className="text-sm opacity-80 leading-6">{item.message}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Section 2 */}
        <div className="w-full overflow-x-auto px-3 no-scrollbar hidden lg:block">
          <div
            className="
            flex gap-4
            snap-x snap-mandatory
            w-max
            pb-4
            scroll-smooth
            "
          >
            {testimonials.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[350px] min-w-[350px]  /* prevents shrinking inside scroll area */ rounded-2xl bg-white shadow-md p-4 flex flex-col gap-3 hover:shadow-xl transition-all duration-300 snap-center"
                >
                  {/* Top Section */}
                  <div className="flex items-center gap-3">
                    <Image
                      width={45}
                      alt="person"
                      src={item.person}
                      className="rounded-full aspect-square"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-sm opacity-60">{item.role}</p>
                    </div>
                  </div>
                  {/* Message */}
                  <p className="text-sm opacity-80 leading-6">{item.message}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
