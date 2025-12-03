import React from "react";
import TestimonialBox from "../components/secondary/TestimonialBox";

const Testimonials = () => {
  const testimonials = [1, 2, 3, 4, 5, 6, 7, 8]; // You can replace with real data

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

      {/* Scrollable Section */}
      <div className="w-full overflow-x-auto px-3">
        <div
          className="
            flex gap-4
            snap-x snap-mandatory
            w-max
            pb-4
            scroll-smooth
            "
        >
          {testimonials.map((item, index) => (
            <div key={index} className="snap-center">
              <TestimonialBox />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
