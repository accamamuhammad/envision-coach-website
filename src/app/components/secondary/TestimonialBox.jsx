import React from "react";

const TestimonialBox = ({ name = "John Doe", role = "Client", message = "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repelldus, reprehenderit culpa! Amet saepe nemo, ducimus." }) => {
  return (
    <div
      className=" 
        w-[260px] min-w-[260px]  /* prevents shrinking inside scroll area */
        rounded-2xl 
        bg-white 
        shadow-md 
        p-4 
        flex 
        flex-col 
        gap-3
        hover:shadow-xl 
        transition-all 
        duration-300
        snap-center
      "
    >
      {/* Top Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-neutral-300" />
        <div className="flex flex-col">
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs opacity-60">{role}</p>
        </div>
      </div>

      {/* Message */}
      <p className="text-xs opacity-80 leading-5">
        {message}
      </p>
    </div>
  );
};

export default TestimonialBox;
