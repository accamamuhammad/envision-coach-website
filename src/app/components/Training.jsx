import React from "react";

const Training = () => {
  return (
    <div className="px-10 py-12 space-y-7 bg-neutral-50">
      <h1 className="font-medium text-3xl lg:text-4xl text-left">
        Ready for Training or Consulting to <br className="lg:hidden" /> improve
        Your Career
      </h1>
      <section className="space-y-6 lg:space-y-0 h-fit lg:gap-7  lg:flex lg:flex-row lg:items-center lg:justify-between ">
        <div className="pull-out-element h-56 shadow-md py-6 px-5 rounded-xl gap-3.5 flex items-start justify-between flex-col">
          <h2 className="text-xl font-medium">Schedule a Free Conultation.</h2>
          <p className="text-sm text-neutral-600">
            Get a free 30min consultation call, to gain valuable inights and a
            personalized roadmap to success
          </p>
          <button className="px-4 py-2.5 cursor-pointer text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-white border hover:border-blue-600 hover:text-blue-600">
            Scehdule Conultation
          </button>
        </div>
        <div className="pull-out-element h-56 shadow-md py-6 px-5 rounded-xl gap-3.5 flex items-start justify-between flex-col">
          <h2 className="text-xl font-medium">
            Find the Appropriate Training.
          </h2>
          <p className="text-sm text-neutral-600">
            Take your Coaching to the next level, Find a training plan that suit
            your needs and career goals
          </p>
          <button className="px-4 py-2.5 cursor-pointer text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-white border hover:border-blue-600 hover:text-blue-600">
            Find Training
          </button>
        </div>
      </section>
    </div>
  );
};

export default Training;
