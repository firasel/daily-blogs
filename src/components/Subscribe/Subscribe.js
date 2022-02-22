import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full lg:w-80 h-fit sticky top-5 px-4 py-4 bg-slate-200 rounded-lg font-[Poppins] mt-8 lg:mt-0">
      <div className="w-full text-center">
        <h4 className="text-xl md:text-2xl font-semibold mb-4">Subscribe</h4>
        <p className="text-sm md:text-base">
          Subscribe to get notifications of new blogs published.
        </p>
        <input
          className="w-11/12 sm:w-2/4 lg:w-full px-2 py-2 rounded text-base md:text-lg mb-4 mt-5 outline-[#fe5f55] border-0"
          type="email"
          placeholder="Enter your email"
        />
        <button className="w-11/12 sm:w-1/4 sm:ml-2 lg:ml-0 lg:w-full py-2 bg-[#fe5f55] text-white font-semibold uppercase text-base md:text-lg tracking-wider rounded mb-2 hover:bg-[#fc5a4e] transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
