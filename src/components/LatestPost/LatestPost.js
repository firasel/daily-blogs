import Image from "next/image";
import React from "react";
import Image3 from "../../assets/images/image3.jpg";
import profileImg from "../../assets/images/profile.jpg";

const LatestPost = () => {
  return (
    <div className="mt-10 font-[Poppins] mb-20">
      <h2 className="text-3xl font-semibold mb-5">Latest Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <div className="relative w-full cursor-pointer">
          <div className="w-full hover:opacity-80 transition-all duration-300">
            <Image className="rounded-3xl" src={Image3} />
          </div>
          <div className="absolute left-0 right-0 mx-auto w-11/12  bottom-5 px-3 py-3 rounded-2xl bg-white hover:scale-105 hover:bottom-4 transition-all duration-200">
            <h4 className="text-lg font-semibold">
              Rerum hic iusto ut reiciendis...
            </h4>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={profileImg} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Leda Ar</h4>
                <p>Oct 06,2022 . 3 minutes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full cursor-pointer">
          <div className="w-full hover:opacity-80 transition-all duration-300">
            <Image className="rounded-3xl" src={Image3} />
          </div>
          <div className="absolute left-0 right-0 mx-auto w-11/12 bottom-5 px-3 py-3 rounded-2xl bg-white hover:scale-105 hover:bottom-4 transition-all duration-200">
            <h4 className="text-lg font-semibold">
              Rerum hic iusto ut reiciendis...
            </h4>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={profileImg} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Leda Ar</h4>
                <p>Oct 06,2022 . 3 minutes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full cursor-pointer">
          <div className="w-full hover:opacity-80 transition-all duration-300">
            <Image className="rounded-3xl" src={Image3} />
          </div>
          <div className="absolute left-0 right-0 mx-auto w-11/12  bottom-5 px-3 py-3 rounded-2xl bg-white hover:scale-105 hover:bottom-4 transition-all duration-200">
            <h4 className="text-lg font-semibold">
              Rerum hic iusto ut reiciendis...
            </h4>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={profileImg} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Leda Ar</h4>
                <p>Oct 06,2022 . 3 minutes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden xl:block relative w-full cursor-pointer">
          <div className="w-full hover:opacity-80 transition-all duration-300">
            <Image className="rounded-3xl" src={Image3} />
          </div>
          <div className="absolute left-0 right-0 mx-auto w-11/12 bottom-5 px-3 py-3 rounded-2xl bg-white hover:scale-105 hover:bottom-4 transition-all duration-200">
            <h4 className="text-lg font-semibold">
              Rerum hic iusto ut reiciendis...
            </h4>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image src={profileImg} />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Leda Ar</h4>
                <p>Oct 06,2022 . 3 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
