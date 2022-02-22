import Image from "next/image";
import React from "react";
import Image1 from "../../assets/images/image1.jpg";
import Image6 from "../../assets/images/image6.jpg";
import Profile from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <div className="lg:flex gap-7 mt-5 font-[Poppins]">
      <div className="w-full">
        <div className="w-full overflow-hidden">
          <Image
            className="!h-full rounded-3xl object-cover"
            src={Image1}
            alt="blog image"
          />
        </div>
        <div className="mt-7">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827]">
            Eum delectus in minima rem
          </h3>
          <p className="text-[#6b7280] text-base hidden sm:block">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the...
          </p>
          <div className="text-xs sm:text-sm flex items-center gap-2 mt-5">
            <div className="w-7 h-7">
              <Image className="rounded-full" src={Profile} alt="profile" />
            </div>
            <span className="text-[#374151]">Adam alade</span>.
            <span className="text-[#6b7280]">Sep 30,2021</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-7 mt-8 lg:mt-0">
        {[1, 2, 3].map((data) => (
          <div key={data} className="flex gap-5 justify-between">
            <div className="w-3/4 flex flex-col py-2">
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-[#111827]">
                Eum delectus in minima rem
              </h3>
              <p className="text-[#6b7280] text-base hidden sm:block">
                It has survived not only five centuries, but also the leap into
                electronic typesetting...
              </p>
              <div className="text-xs sm:text-sm flex items-center gap-2  sm:mt-auto pb-1">
                <div className="w-7 h-7 hidden sm:block">
                  <Image className="rounded-full" src={Profile} alt="profile"/>
                </div>
                <span className="text-[#374151]">Adam alade</span>.
                <span className="text-[#6b7280]">Sep 30,2021</span>
              </div>
            </div>
            <div className="w-2/4 sm:w-1/4 lg:w-1/3 overflow-hidden">
              <Image className="rounded-2xl" src={Image6} alt="blog image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
