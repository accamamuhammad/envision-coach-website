import React from "react";

const Stats = () => {
  return (
    <div className="px-8 py-8 lg:py-9 space-y-8 flex flex-col lg:flex-row gap-2.5 bg-neutral-50">
      <div className="space-y-3 lg:w-[50%]">
        <h1 className="font-medium text-2xl lg:text-3xl">
          Proving Excellence Through <br />
          Training & Consulting
        </h1>
        <p className="text-sm opacity-75 lg:w-[85%] leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          cupiditate. Doloribus, volupt perferendis sunt optio, hic voluptatem
          fugiat aspernatur.
        </p>
      </div>
      <div className="w-full grid gap-10 grid-cols-2 lg:w-[50%]">
        <div className="pop-out-element text-center space-y-2.5">
          <h1 className="text-4xl font-semibold">160+</h1>
          <p className="text-base opacity-70">Countries Envisiona</p>
        </div>
        <div className="pop-out-element text-element text-center space-y-2.5">
          <h1 className="text-4xl font-semibold">35+</h1>
          <p className="text-base opacity-70">
            Years as a top leadership company
          </p>
        </div>
        <div className="pop-out-element text-center space-y-2.5">
          <h1 className="text-4xl font-semibold">5k+</h1>
          <p className="text-base opacity-70">
            Leader School in more than 50 <button>Countries</button>
          </p>
        </div>
        <div className="pop-out-element text-center space-y-2.5">
          <h1 className="text-4xl font-semibold">15k+</h1>
          <p className="text-base opacity-70">Client engagements per year</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
