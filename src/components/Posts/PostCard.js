import Image from "next/image";
import React from "react";
import Image6 from "../../assets/images/image6.jpg";
import Profile from "../../assets/images/profile.jpg";

const PostCard = () => {
  return (
    <div className="transition-all duration-300 hover:scale-[1.03] cursor-pointer">
      <Image className="w-full rounded-md" src={Image6} alt="post img" />
      <div className="mt-5">
        <h4 className="text-lg lg:text-xl">
          Product Designs Gender Crisis: “If Businesses Dont Adapt Theyll..
        </h4>
        <div className="text-xs sm:text-sm flex items-center gap-2 mt-5">
          <div className="w-8 h-8">
            <Image className="rounded-full" src={Profile} alt="profile" />
          </div>
          <div className="leading-4">
            <span className="text-[#374151] font-semibold">Adam alade</span>
            <br />
            <span className="text-[#6b7280]">Sep 30,2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
