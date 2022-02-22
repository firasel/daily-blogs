import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-10">
      <hr className="border-gray-300" />
      <div className="sm:flex justify-between py-2">
        <div className="w-full">
          <div className="flex items-start">
            <span className="text-[2rem] md:text-4xl text-[#fe5f55] font-semibold italic">
              D
            </span>
            <div className="font-semibold text-lg md:text-xl text-[#0d0d18] whitespace-nowrap leading-5 mt-4">
              aily
              <br />
              Blogs
            </div>
          </div>
        </div>
        <div className="w-full flex sm:justify-center mt-4 sm:mt-0 text-gray-700">
          <div className="w-fit">
            <h4 className="text-xl font-semibold mb-4 text-black relative">
              Quick Links
              <span className="w-12 h-[2.5px] bg-[#fe5f55] absolute -bottom-1 left-0"></span>
            </h4>
            <h5 className="cursor-pointer">About</h5>
            <h5 className="cursor-pointer">Contact</h5>
          </div>
        </div>
        <div className="w-full flex sm:justify-end mt-3 sm:mt-0">
          <div className="w-fit">
            <h4 className="text-xl font-semibold mb-4 relative">
              Follow Us
              <span className="w-16 h-[2.5px] bg-[#fe5f55] absolute -bottom-1 left-0"></span>
            </h4>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded-full hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded-full hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
                <FiInstagram />
              </div>
              <div className="w-10 h-10 flex items-center justify-center p-2 text-white bg-[#0d0d18] rounded-full hover:bg-[#fe5f55] transition-all duration-200 cursor-pointer">
                <AiOutlineTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-3">© 2022, All rights reserved by Daily Blogs.</p>
    </div>
  );
};

export default Footer;
