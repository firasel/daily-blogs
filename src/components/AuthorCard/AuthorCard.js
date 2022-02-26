import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const AuthorCard = ({user}) => {
  return (
    <div className="w-full lg:w-80 h-fit top-5 px-4 py-4 bg-slate-100 rounded-lg font-[Poppins] mt-7 lg:mt-0 mb-7">
      <div className="w-full text-center">
        <div className="w-16 h-16 rounded-full mt-4 mb-5 overflow-hidden mx-auto p-1 border-2 border-[#fe5f55]">
          <img
            className="rounded-full w-full"
            src={user?.image}
            alt="Profile image"
          />
        </div>
        <h4 className="text-lg md:text-xl font-semibold mb-3">{user.name}</h4>
        <div className="flex items-center gap-3 justify-center my-4">
          <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
            <FiInstagram />
          </div>
          <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
            <AiOutlineTwitter />
          </div>
        </div>
        <button className="py-2 text-black hover:text-white font-semibold text-base md:text-lg tracking-wider rounded mt-2 mb-2 bg-slate-200 hover:bg-[#fe5f55] transition-all duration-300 px-8 flex items-center gap-1 mx-auto">
          View Profile
          <CgArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AuthorCard;
